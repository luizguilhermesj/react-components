import React from 'react';
import cl from 'iconic-cl';

const { 
    Heading,
    Label,
    ContentBox,
    Seperator,
    Radio,
    Switch,
} = cl.elements;

const {
    RadioGroup,
    Drawer,
} = cl.components;

const {
    Flex
} = cl.layout;

class CommunicationContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            primaryInterest: "mens"
        };
    }

    changePrimaryInterest(value) {
        this.setState({primaryInterest: value});
    }

    render() {
        return (
            <div className="preferenceCenter__communication">
                <ContentBox spacing="md">
                    <Heading 
                        text="Primary interest" 
                        type="h2" 
                    />
                    <Label text="Select somthing else and lorum ipsum lorum"/>

                    <Seperator width="90" spacing="16" />

                    <RadioGroup
                        values={[
                            { label: "Mens", value: "mens" },
                            { label: "Womens", value: "womens" },
                            { label: "Kids", value: "kids" },
                        ]}
                        selected={this.state.primaryInterest}
                        onSelect={this.changePrimaryInterest.bind(this)}
                        name="primaryInterest"
                    />
                </ContentBox>

                <ContentBox spacing="md">
                    <Drawer
                        heading="News"
                        text="Subscribe to stay connected and up to date with sales, exclusive offers and alerts"
                        isOpen={true}
                    >
                        <Label text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla lectus et commodo aliquet. Suspendisse ligula est, aliquam quis erat eu, sagittis dignissim quam."/>
                    </Drawer>
                </ContentBox>
            </div>
        );
    }
}

export default CommunicationContent;
