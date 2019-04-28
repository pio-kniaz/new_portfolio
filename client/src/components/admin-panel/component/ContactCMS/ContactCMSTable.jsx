import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { successToast, failureToast } from 'utils/toastify/toastify';

class ContactCMSTable extends React.Component {
  static propTypes = {
    emails: PropTypes.array.isRequired,
    deleteEmail: PropTypes.func.isRequired,
    emailsDeleteFailure: PropTypes.bool.isRequired,
    emailsDeleteData: PropTypes.object,
  }

  static defaultProps = {
    emailsDeleteData: null,
  }

  deleteSelectedEmail = (id) => {
    const { deleteEmail } = this.props;
    deleteEmail(id)
      .then(() => {
        const { emailsDeleteFailure, emailsDeleteData } = this.props;
        console.log(emailsDeleteData);
        if (!emailsDeleteFailure) {
          successToast(`Email from ${emailsDeleteData.date} has been removed`);
        } else {
          failureToast(emailsDeleteData.data);
        }
      });
  }

  render() {
    const { emails } = this.props;
    return (
      <Table responsive dark striped hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Date</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {emails.map((elem, i) => (
            <tr key={elem._id}>
              <th scope="row">{i + 1}</th>
              <td>{elem.name}</td>
              <td>{elem.email}</td>
              <td>{elem.message}</td>
              <td>{elem.date}</td>
              <td>
                <FontAwesomeIcon
                  onClick={() => this.deleteSelectedEmail(elem._id)}
                  icon={faTimes}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}
export default ContactCMSTable;
