import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

export const Summary: React.FC = () => {
  const intl = useIntl();

  return (
    <section>
      <h1>
        <FormattedMessage id="summary.title" />
      </h1>
      <div>
        <FormattedMessage
          id="summary.content"
          values={{
            medium: (
              <a href={intl.formatMessage({ id: 'links.medium' })}>medium</a>
            ),
            devto: (
              <a href={intl.formatMessage({ id: 'links.dev.to' })}>dev.to</a>
            )
          }}
        />
      </div>
    </section>
  );
};
