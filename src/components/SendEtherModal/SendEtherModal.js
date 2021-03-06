// @flow
import React from 'react';
import Modal from '../Modal';
import SendEtherFormContainer from '../SendEtherForm';

import type { Token } from '../../types/tokens';

type Props = {
  isOpen: boolean,
  handleClose: (SyntheticEvent<>) => void,
  token: Token,
  tokens: Array<Token>,
};

const SendEtherModal = (props: Props) => (
  <Modal title="Send Ether or Tokens" icon="info-sign" isOpen={props.isOpen} onClose={props.handleClose}>
    <SendEtherFormContainer token={props.token} tokens={props.tokens} />
  </Modal>
);

export default SendEtherModal;
