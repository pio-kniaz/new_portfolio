import React from 'react';
import { FormGroup, Input, Button } from 'reactstrap';
import PropTypes from 'prop-types';

class InputFile extends React.Component {
  static propTypes = {
    input: PropTypes.object.isRequired,
  }

  buttonAttachment = React.createRef();

  openFileAttachment = () => {
    this.buttonAttachment.current.click();
  }


  onChange = (e) => {
    const { input: { onChange } } = this.props;
    onChange(e.target.files[0]);
  }

  render() {
    const { ...input } = this.props;
    return (
      <FormGroup
        className="d-flex flex-column"
      >
        <div className="ButtonAtachment__container">
          <Input
            {...input}
            style={{
              height: '0',
              width: '0',
              visibility: 'hidden',
            }}
            innerRef={this.buttonAttachment}
            type="file"
            accept=".jpg, .png, .jpeg"
            onChange={this.onChange}
            name="image"
          />
        </div>
        <Button
          outline
          color="success"
          onClick={this.openFileAttachment}
        >
          Add Image
        </Button>
      </FormGroup>
    );
  }
}
export default InputFile;
