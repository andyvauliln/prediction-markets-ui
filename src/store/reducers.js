// @flow
import createReducer from './createReducer';
import etherBalanceActionTypes from './actions/etherBalance';
import accountBalancesActionTypes from './actions/accountBalances';
import sendEtherFormActionTypes from './actions/sendEtherForm';
import accountActionTypes from './actions/account';
import depositFormActionTypes from './actions/depositForm';
import settingsActionTypes from './actions/settings';
import createWalletActionTypes from './actions/createWallet';
import walletPageActionTypes from './actions/walletPage';
import loginPageActionTypes from './actions/loginPage';
import logoutPageActionTypes from './actions/logoutPage';
import signerSettingsActionTypes from './actions/signerSettings';
import appActionTypes from './actions/app';

import * as etherBalanceEvents from './domains/etherBalance';
import * as accountBalancesEvents from './domains/accountBalances';
import * as sendEtherFormEvents from './domains/sendEtherForm';
import * as loginPageEvents from './domains/loginPage';
import * as accountEvents from './domains/account';
import * as depositFormEvents from './domains/depositForm';
import * as settingsEvents from './domains/settings';
import * as signerEvents from './domains/signer';
import * as walletsEvents from './domains/wallets';
import * as notificationEvents from './domains/notifications';

export const loginPage = createReducer(action => {
  const { type, payload } = action;
  switch (type) {
    case loginPageActionTypes.requestLogin:
      return loginPageEvents.loginRequested();
    case loginPageActionTypes.loginError:
      return loginPageEvents.loginFailed(payload.error);
    case loginPageActionTypes.loginWithMetamask:
      return loginPageEvents.authenticated();
    case loginPageActionTypes.loginWithWallet:
      return loginPageEvents.authenticated();
    default:
      return loginPageEvents.initialized();
  }
});

export const accountBalances = createReducer(action => {
  const { type, payload } = action;
  switch (type) {
    case accountBalancesActionTypes.subscribeBalance:
      return accountBalancesEvents.subscribed(payload.symbol);
    case accountBalancesActionTypes.unsubscribeBalance:
      return accountBalancesEvents.unsubscribed(payload.symbol);
    case accountBalancesActionTypes.updateBalance:
      return accountBalancesEvents.updated([{ symbol: payload.symbol, balance: payload.balance }]);
    case accountBalancesActionTypes.updateBalances:
      return accountBalancesEvents.updated(payload.balances);
    case accountBalancesActionTypes.clearBalances:
      return accountBalancesEvents.cleared();
    case depositFormActionTypes.subscribeBalance:
      return accountBalancesEvents.subscribed(payload.symbol);
    case depositFormActionTypes.unsubscribeBalance:
      return accountBalancesEvents.unsubscribed(payload.symbol);
    case depositFormActionTypes.updateBalance:
      return accountBalancesEvents.updated([{ symbol: payload.symbol, balance: payload.balance }]);
    case depositFormActionTypes.updateBalances:
      return accountBalancesEvents.updated(payload.balances);
    case walletPageActionTypes.updateBalances:
      return accountBalancesEvents.updated(payload.balances);
    case walletPageActionTypes.updateBalance:
      return accountBalancesEvents.updated([{ symbol: payload.symbol, balance: payload.balance }]);
    case walletPageActionTypes.updateAllowances:
      return accountBalancesEvents.allowancesUpdated(payload.allowances);
    case walletPageActionTypes.updateAllowance:
      return accountBalancesEvents.allowancesUpdated([{ symbol: payload.symbol, allowance: payload.allowance }]);
    default:
      return accountBalancesEvents.initialized();
  }
});

export const signer = createReducer(action => {
  const { type, payload } = action;
  switch (type) {
    case signerSettingsActionTypes.requestSigner:
      return signerEvents.signerRequested();
    case signerSettingsActionTypes.updateSigner:
      return signerEvents.signerUpdated(payload.params);
    case signerSettingsActionTypes.error:
      return signerEvents.signerError(payload.message);
    default:
      return signerEvents.initialized();
  }
});

export const sendEtherForm = createReducer(action => {
  const { type, payload } = action;
  switch (type) {
    case sendEtherFormActionTypes.txError:
      return sendEtherFormEvents.txError(payload.status, payload.statusMessage);
    case sendEtherFormActionTypes.validateTx:
      return sendEtherFormEvents.txValidated(payload.statusMessage, payload.gas);
    case sendEtherFormActionTypes.invalidateTx:
      return sendEtherFormEvents.txInvalidated(payload.statusMessage);
    case sendEtherFormActionTypes.revertTx:
      return sendEtherFormEvents.txReverted(payload.statusMessage, payload.receipt);
    case sendEtherFormActionTypes.sendTx:
      return sendEtherFormEvents.txSent(payload.hash);
    case sendEtherFormActionTypes.confirmTx:
      return sendEtherFormEvents.txConfirmed(payload.receipt);
    default:
      return sendEtherFormEvents.initialized();
  }
});


export const account = createReducer(action => {
  const { type, payload } = action;
  switch (type) {
    case accountActionTypes.updateAccount:
      return accountEvents.accountUpdated(payload.address, '');
    case signerSettingsActionTypes.updateSigner:
      return accountEvents.accountUpdated(payload.address, '');
    case loginPageActionTypes.loginWithMetamask:
      return accountEvents.accountUpdated(payload.address, '');
    case loginPageActionTypes.loginWithWallet:
      return accountEvents.accountUpdated(payload.address, payload.privateKey);
    case logoutPageActionTypes.logout:
      return accountEvents.accountRemoved();
    case accountActionTypes.updateCurrentBlock:
      return accountEvents.currentBlockUpdated(payload.currentBlock);
    default:
      return accountEvents.initialized();
  }
});

export const depositForm = createReducer(action => {
  const { type, payload } = action;
  switch (type) {
    case depositFormActionTypes.deposit:
      return depositFormEvents.deposited();
    case depositFormActionTypes.confirm:
      return depositFormEvents.confirmed();
    case depositFormActionTypes.sendConvertTx:
      return depositFormEvents.convertTxSent(payload.hash);
    case depositFormActionTypes.revertConvertTx:
      return depositFormEvents.convertTxReverted(payload.receipt);
    case depositFormActionTypes.confirmConvertTx:
      return depositFormEvents.convertTxConfirmed(payload.receipt);
    case depositFormActionTypes.sendAllowTx:
      return depositFormEvents.allowTxSent(payload.hash);
    case depositFormActionTypes.revertAllowTx:
      return depositFormEvents.allowTxReverted(payload.receipt);
    case depositFormActionTypes.confirmAllowTx:
      return depositFormEvents.allowTxConfirmed(payload.receipt);
    default:
      return depositFormEvents.initialized();
  }
});

export const settings = createReducer(action => {
  const { type } = action;
  switch (type) {
    case settingsActionTypes.togglePvtKeyLock:
      return settingsEvents.pvtKeyLockToggled();
    case settingsActionTypes.setDefaultGasLimit:
      return settingsEvents.defaultGasLimitSet();
    case settingsActionTypes.setDefaultGasPrice:
      return settingsEvents.defaultGasPriceSet();
    default:
      return settingsEvents.initialized();
  }
});

export const wallets = createReducer(action => {
  const { type, payload } = action;
  switch (type) {
    case createWalletActionTypes.createWallet:
      return walletsEvents.walletAdded(payload.address, payload.encryptedWallet);
    case createWalletActionTypes.addWallet:
      return walletsEvents.walletAdded(payload.address, payload.encryptedWallet);
    case createWalletActionTypes.removeWallet:
      return walletsEvents.walletRemoved(payload);
    case loginPageActionTypes.createWallet:
      return walletsEvents.walletAdded(payload.address, payload.encryptedWallet);
    default:
      return walletsEvents.initialized();
  }
});

export const etherBalance = createReducer(action => {
  const { type, payload } = action;
  switch (type) {
    case etherBalanceActionTypes.subscribeBalance:
      return etherBalanceEvents.subscribed(payload.address);
    case etherBalanceActionTypes.unsubscribeBalance:
      return etherBalanceEvents.unsubscribed(payload.address);
    case etherBalanceActionTypes.updateBalance:
      return etherBalanceEvents.updated(payload.address, payload.balance);
    default:
      return etherBalanceEvents.initialized();
  }
});

export const notifications = createReducer(action => {
  const { type, payload } = action;
  switch (type) {
    case appActionTypes.addNotification:
      return notificationEvents.notificationAdded(payload.options);
    case appActionTypes.addSuccessNotification:
      return notificationEvents.notificationAdded(payload.options);
    case appActionTypes.addDangerNotification:
      return notificationEvents.notificationAdded(payload.options);
    case appActionTypes.removeNotification:
      return notificationEvents.notificationRemoved(payload.id);
    default:
      return notificationEvents.initialized();
  }
});
