import React from 'react';
import { FormattedMessage } from 'react-intl';

export const GeneralError: React.FC = () => (
  <section>
    <h1>
      <FormattedMessage id="error.title" />
    </h1>
    <div>
      <FormattedMessage id="error.content" />
    </div>
  </section>
);
