import './preferenceCenter.scss';

import React from 'react';
import cl from 'iconic-cl';

import Menu from '../../shared/Menu';
import HeroBanner from './components/HeroBanner';

import CommunicationContent from './components/CommunicationContent';
import AddressContent from './components/AddressContent';
import DetailsContent from './components/DetailsContent';

const { Flex, Container, Grid } = cl.layout;
const { ContentBox, Icon } = cl.elements;
const { Banner, Tabs, Card } = cl.components;

const { Row, Column } = Grid;
const { TabContainer, TabItem } = Tabs;

class PreferenceCenter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedContent: "communication"
        };
    }

    changeTab(id) {
        this.setState({
            selectedContent: id
        });
    }

    renderContent() {
        switch( this.state.selectedContent ) {
            case "address":
                return <AddressContent />;
            case "communication":
                return <CommunicationContent />;
            case "details":
                return <DetailsContent />
            default:
                return <ContentBox>An error occured</ContentBox>
        }
    }

    render() {
        const bannerAction = (
            <div><Icon type="bell" />Show me</div>
        );

        const bannerContent = (
            <div><Icon type="exclamation-circle"/>You have 4 new notifications about something</div>
        );

        return (
            <div className="preferenceCenter">
                <Menu />
                <HeroBanner />
                <Container>
                    <Banner 
                        content={bannerContent}
                        action={bannerAction}
                        spacing="large"
                    />

                    <Row>
                        <Column size={2}>
                            <ContentBox className="noMarginLeft">
                                <TabContainer
                                    selected={this.state.selectedContent}
                                    onSelect={this.changeTab.bind(this)}
                                    isVertical={true}
                                    isSeperated={true}
                                >
                                    <Card id="details" icon="user" label="Your details" />
                                    <TabItem id="address"><Card icon="address-book" label="Your address" /></TabItem>
                                    <TabItem id="communication"><Card icon="comment" label="Communication Preferences" /></TabItem>
                                </TabContainer>
                            </ContentBox>
                        </Column>

                        <Column size={7}>
                            { this.renderContent() }
                        </Column>

                        <Column size={3}>
                            <ContentBox className="noMarginRight">
                                <h1>3</h1>
                            </ContentBox>
                        </Column>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default PreferenceCenter;
