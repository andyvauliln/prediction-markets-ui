import accountDomain from './account';
import accountBalancesDomain from './accountBalances';
import depositFormDomain from './depositForm';
import etherBalanceDomain from './etherBalance';
import sendEtherFormDomain from './sendEtherForm';
import loginPageDomain from './loginPage';
import settingsDomain from './settings';
import signerDomain from './signer';
import tokenDomain from './tokens';
import walletsDomain from './wallets';
import notificationsDomain from './notifications';


export const getAccountDomain = state => accountDomain(state.account);
export const getAccountBalancesDomain = state => accountBalancesDomain(state.accountBalances);
export const getDepositFormDomain = state => depositFormDomain(state.depositForm);
export const getEtherBalanceDomain = state => etherBalanceDomain(state.etherBalance);
export const getSendEtherFormDomain = state => sendEtherFormDomain(state.sendEtherForm);
export const getLoginPageDomain = state => loginPageDomain(state.loginPage);
export const getSettingsDomain = state => settingsDomain(state.settings);
export const getSignerDomain = state => signerDomain(state.signer);
export const getTokenDomain = state => tokenDomain(state.tokens);
export const getWalletsDomain = state => walletsDomain(state.wallets);
export const getNotificationsDomain = state => notificationsDomain(state.notifications);
