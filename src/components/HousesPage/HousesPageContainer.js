import { onAdressChange, addComment, setItems, changeCurrentPage, setTotalCount, setIsFetching } from '../../Redux/housesReducer';
import HousesPage from './HousesPage';
import { connect } from 'react-redux';
import React from 'react';
import * as axios from 'axios';
import Spinner from '../Common/Spinner/Spinner';

class HousesPageAPI extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://v3api.citybase.in.ua/public/feed?city=Kyiv&section=rent_living&limit=${this.props.pageSize}&page=${this.props.currentPage}&date_from=${this.props.currentDate}`)
            .then(responce => {
                this.props.setIsFetching(false)
                this.props.setItems(responce.data.data.ads);
                this.props.setTotalCount(responce.data.data.total)
            }
            );

    }

    onPageClick = (page) => {
        this.props.changeCurrentPage(page);
        this.props.setIsFetching(true)
        axios.get(`https://v3api.citybase.in.ua/public/feed?city=Kyiv&section=rent_living&limit=${this.props.pageSize}&page=${page}&date_from=${this.props.currentDate}`)
            .then(responce => {
                this.props.setIsFetching(false)
                this.props.setItems(responce.data.data.ads)
            });
    }
    render() {
        return <>
        {this.props.isFetching ? <Spinner/> : <HousesPage totalItemsCount={this.props.totalItemsCount}
                                                            pageSize ={this.props.pageSize}
                                                            currentPage={this.props.currentPage}
                                                            onPageClick ={this.onPageClick}
                                                            items = {this.props.items}
                                                            onAdressChange ={this.props.onAdressChange}
                                                            newAdressText={this.props.newAdressText}
                                                            addComment={this.props.addComment}/>}
        
        </>
    }
}

const mapStatetoProps = (state) => {
    return {
        items: state.housesPage.items,
        newAdressText: state.housesPage.newAdressText,
        totalItemsCount: state.housesPage.totalItemsCount,
        currentPage: state.housesPage.currentPage,
        pageSize: state.housesPage.pageSize,
        currentDate: state.housesPage.currentDate,
        isFetching: state.housesPage.isFetching

    }
}

const HousesPageContainer = connect(mapStatetoProps, {onAdressChange, addComment, setItems, changeCurrentPage, setTotalCount, setIsFetching})(HousesPageAPI);

export default HousesPageContainer;