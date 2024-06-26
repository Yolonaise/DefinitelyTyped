// From https://github.com/jpuri/react-draft-wysiwyg/blob/master/stories/

import { RichUtils } from "draft-js";
import * as React from "react";
import { Editor } from "react-draft-wysiwyg";

class CustomOption extends React.Component<any, any> {
    toggleBold(): void {
        const { editorState, onChange } = this.props;
        const newState = RichUtils.toggleInlineStyle(
            editorState,
            "BOLD",
        );
        if (newState) {
            onChange(newState);
        }
    }

    render() {
        return <div className="rdw-storybook-custom-option" onClick={this.toggleBold}>B</div>;
    }
}

const CustomToolbar = () => (
    <div>
        <h3>Last option marked as B is custom option for making test BOLD.</h3>
        <Editor
            toolbarCustomButtons={[<CustomOption />]}
        />
    </div>
);
