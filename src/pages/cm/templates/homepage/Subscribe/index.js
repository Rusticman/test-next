import React from 'react';

import Icon from '../../../../../components/Icon/envelope';

import styles from './styles.less';

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

class Subscribe extends React.Component {
  state = {
    email: '',
    error: '',
    success: '',
  };

  /**
   * Update the e-mail address
   * @param e
   * @private
   */
  _updateEmail = e => {
    this.setState({
      email: e.target.value,
    });
  };

  /**
   * Submit the e-mail if it's valid
   * @private
   */
  _submit = async () => {
    const { email } = this.state;

    if (!validateEmail(email)) {
      return this.setState({
        error: 'Please enter a valid e-mail address.',
        success: '',
      });
    }

    try {
      const res = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (res.status !== 200) {
        const { message } = await res.json();
        this.setState({
          success: '',
          error: message || 'Sorry, we are unable to submit tha email address',
        });
      } else {
        this.setState({
          success: 'Thanks, you have subscribed to e-mail updates.',
          error: '',
        });
      }
    } catch (e) {
      this.setState({
        success: '',
        error: 'Woops, something went wrong! Please try again.',
      });
    }
  };

  render() {
    return (
      <div className={styles.subscribe}>
        <div className={styles.headline}>
          <Icon /> Keep up with our latest news
        </div>
        {!this.state.success && (
          <div>
            <div className={styles.input}>
              <input
                type="text"
                placeholder="Enter your e-mail address..."
                onChange={this._updateEmail}
                aria-label="Subscribe"
              />
              <div
                className={styles.button}
                role="button"
                onClick={this._submit}
                onKeyPress={this._submit}
                tabIndex={0}
              >
                Subscribe
              </div>
            </div>
            <div className={styles.message}>{this.state.error}</div>
          </div>
        )}

        {!!this.state.success && (
          <div className={styles.success}>{this.state.success}</div>
        )}
      </div>
    );
  }
}

export default Subscribe;
