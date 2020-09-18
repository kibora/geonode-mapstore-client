/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
*/

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import castArray from 'lodash/castArray';
import { createSelector } from 'reselect';
import SearchBar from '@js/components/SearchBar';
import BrandNavbar from '@js/components/BrandNavbar';
import BackgroundHero from '@js/components/BackgroundHero';
import Navbar from '@js/components/Navbar';
import CardGrid from '@js/components/CardGrid';
import { Container, Row, Col, Button, Dropdown } from 'react-bootstrap-v1';
import {
    fetchSuggestions,
    searchResources
} from '@js/actions/geonodesearch';
import imageTest from '../../mock-data/kevin-quezada-Z8Ybwv9_v8M-unsplash.jpg';
import geonodeLogo from '../../mock-data/geonode-logo.svg';
import { hashLocationToHref } from '@js/utils/GNSearchUtils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faTimes } from '@fortawesome/free-solid-svg-icons';

const DEFAULT_SUGGESTIONS = [];
const DEFAULT_RESOURCES = [];

const ConnectedSearchBar = connect(
    createSelector([
        state => state?.geoNodeSearch?.suggestions || DEFAULT_SUGGESTIONS,
        state => state?.geoNodeSearch?.loading || false
    ], (suggestions, loading) => ({
        suggestions,
        loading
    })),
    {
        onFetchSuggestions: fetchSuggestions
    }
)(SearchBar);

const ConnectedCardGrid = connect(
    createSelector([
        state => state?.geoNodeSearch?.resources || DEFAULT_RESOURCES,
        state => state?.geoNodeSearch?.loading || false,
        state => state?.geoNodeSearch?.isNextPageAvailable || false
    ], (resources, loading, isNextPageAvailable) => ({
        resources,
        loading,
        isNextPageAvailable
    }))
)(CardGrid);

import url from 'url';

function Main({
    location,
    params,
    onSearch
}) {

    const [isBackgroundVisible, setIsBackgroundVisible] = useState(true);
    const [isBackgroundContentVisible, setIsBackgroundContentVisible] = useState(true);

    function handleUpdate(newParams, pathname) {
        const { query } = url.parse(location.search, true);
        onSearch({
            ...query,
            ...params,
            ...newParams
        }, pathname);
    }

    function handleVisibility(type, visibility) {
        if (type === 'background') {
            setIsBackgroundVisible(visibility);
        }
        if (type === 'content') {
            setIsBackgroundContentVisible(visibility);
        }
    }

    const searchBoxTop = 200;
    const navbarHeight = 50;

    const search = (
        <ConnectedSearchBar
            key="search"
            value={params.q || ''}
            style={{
                width: '100%',
                maxWidth: 550
            }}
            onChange={(value) =>
                handleUpdate({
                    q: value
                }, '/search/')}
        />
    );

    const { query } = url.parse(location.search, true);
    const filters = Object.keys(query).reduce((acc, key) => key.indexOf('filter') === 0
        ? [...acc, ...castArray(query[key]).map((value) => ({ key, value })) ]
        : acc, []);


    return (
        <>
            <BrandNavbar
                links={[
                    {
                        src: geonodeLogo,
                        href: '#/'
                    }
                ]}
                style={{
                    height: navbarHeight,
                    backgroundColor: !isBackgroundVisible ? undefined : 'transparent'
                }}
            >
                {!isBackgroundContentVisible && search}
            </BrandNavbar>
            <BackgroundHero
                src={imageTest}
                contentTop={searchBoxTop}
                offset={navbarHeight}
                onChangeVisibility={handleVisibility}
            >
                {isBackgroundContentVisible && <div
                    style={{
                        position: 'absolute',
                        top: searchBoxTop,
                        width: '100%',
                        height: navbarHeight,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 20
                    }}>
                    {search}
                </div>}
            </BackgroundHero>
            <Navbar style={{ top: navbarHeight }} />
            <div
                style={{
                    backgroundColor: 'white',
                    position: 'relative',
                    minHeight: '100vh'
                }}>
                <Container>
                <div style={{ position: 'sticky', top: navbarHeight * 2, zIndex: 10 }}>
                        <Row>
                            <Col className="bg-primary text-white p-2">
                                <div >
                                    <Button className="mr-3"><FontAwesomeIcon icon={faFilter}/></Button>
                                    {filters.map(({ key, value }) => {
                                        return (<Button
                                            className="mr-1"
                                            variant="outline-light"
                                            // as="a"
                                            size="sm"
                                            href={hashLocationToHref({
                                                location,
                                                query: { [key]: value }
                                            })}>
                                            {value}&nbsp;&nbsp;<FontAwesomeIcon icon={faTimes}/>
                                        </Button>);
                                    })}
                                </div>
                            </Col>
                        </Row>
                        <Row className="bg-light p-2">
                            <Col>
                                <h4>Resources</h4>
                            </Col>
                            <Col style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                                <Dropdown alignRight>
                                    <Dropdown.Toggle id="dropdown-basic" variant="outline-primary">
                                        Order
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item
                                            href={hashLocationToHref({
                                                location,
                                                query: {
                                                    sort: ['-date']
                                                },
                                                replaceQuery: true
                                            })}>Most recent</Dropdown.Item>
                                        <Dropdown.Item
                                            href={hashLocationToHref({
                                                location,
                                                query: {
                                                    sort: ['date']
                                                },
                                                replaceQuery: true
                                            })}>Less recent</Dropdown.Item>
                                        <Dropdown.Item
                                            href={hashLocationToHref({
                                                location,
                                                query: {
                                                    sort: ['title']
                                                },
                                                replaceQuery: true
                                            })}>A Z</Dropdown.Item>
                                        <Dropdown.Item
                                            href={hashLocationToHref({
                                                location,
                                                query: {
                                                    sort: ['-title']
                                                },
                                                replaceQuery: true
                                            })}>Z A</Dropdown.Item>
                                        <Dropdown.Item
                                            href={hashLocationToHref({
                                                location,
                                                query: {
                                                    sort: ['popular_count']
                                                },
                                                replaceQuery: true
                                            })}>Most popular</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>
                    </div>
                    <ConnectedCardGrid
                        location={location}
                        page={params.page ? parseFloat(params.page) : 1}
                        onLoad={(value) => {
                            handleUpdate({
                                page: value
                            });
                        }}
                    />
                </Container>
            </div>
        </>
    );
}

/* <>
            <div className={className}>

                { <BrandNavbar panelShown={detailsPanelShown} /> }
                <div
                    style={{
                        position: 'absolute',
                        width: '100%',
                        minHeight: '100vh',
                        backgroundColor: 'aliceblue'
                    }}>

                </div>
                <Container
                    style={{
                        minHeight: '100vh'
                    }}
                >
                    { <Search
                        panelShown={detailsPanelShown}
                        onFetchSuggestions={text => dispatch(fetchSuggestions(text))}
                    /> }
                    { <Row
                        style={{
                            position: 'sticky',
                            top: 0,
                            zIndex: 2,
                            backgroundColor: 'white'
                        }}
                    >
                        <Col>

                        </Col>
                    </Row>}

                    <ConnectedSearch />
                    
                    <ConnectedCardGrid />
                </Container>
                { <FeaturedItems
                    panelShown={detailsPanelShown}
                    data={featuredItemsData}>
                </FeaturedItems>
                <CardGrid
                    className="bg-light"
                    data={tileData}
                    onTileClick={onTileClick}
                    detailsShown={detailsPanelShown} 
                    selected={selectedItem}>
                </CardGrid>}
            </div>
            {<DetailPanel
                onClose={onDetailsPanelClose}
                selected={selectedItem}
                isShown={detailsPanelShown}>
            </DetailPanel>
        </>*/
Main.propTypes = {
    dispatch: PropTypes.func,
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object,
    plugins: PropTypes.object,
    pluginsConfig: PropTypes.array
};

const DEFAULT_PARAMS = {};

const ConnectedMain = connect(
    createSelector([
        state => state?.geoNodeSearch?.params || DEFAULT_PARAMS
    ], (params) => ({
        params
    })),
    {
        onSearch: searchResources
    }
)(Main);


export default ConnectedMain;
