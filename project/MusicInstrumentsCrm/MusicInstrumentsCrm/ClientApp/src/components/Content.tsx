import React from 'react';
import { Switch, Route, Router } from 'react-router';
import GoodView from './contents/GoodView';
import GoodTypeView from './contents/GoodTypeView';
import { BrowserRouter } from 'react-router-dom';
import AddressView from './contents/AddressView';
import BuyerView from './contents/BuyerView';
import CarView from './contents/CarView';
import CountryView from './contents/CountryView';
import DeliveryView from './contents/DeliveryView';
import FactoryView from './contents/FactoryView';
import GoodInOfferView from './contents/GoodInOfferView';
import MarkView from './contents/MarkView';
import ModelView from './contents/ModelView';
import OfferView from './contents/OfferView';
import StaffView from './contents/StaffView';
import StoreView from './contents/StoreView';
import SupplyInStoreView from './contents/SupplyInStoreView';
import UserView from './contents/UserView';

export default class Content extends React.Component<{}, {}> {
  static map(arg0: (route: any, i: any) => JSX.Element) {
    throw new Error("Method not implemented.");
  }
  public render() {
    return (
        <div className="Content">
          <button className="btn-content">Add</button>
          <button className="btn-content">Delete</button>
            <Route path='/Good' component={GoodView} />
            <Route path='/GoodType' component={GoodTypeView} />
            <Route path='/Address' component={AddressView} />
            <Route path='/Buyer' component={BuyerView} />
            <Route path='/Car' component={CarView} />
            <Route path='/Country' component={CountryView} />
            <Route path='/Delivery' component={DeliveryView} />
            <Route path='/Factory' component={FactoryView} />
            <Route path='/GoodInOffer' component={GoodInOfferView} />
            <Route path='/Mark' component={MarkView} />
            <Route path='/Model' component={ModelView} />
            <Route path='/Offer' component={OfferView} />
            <Route path='/Staff' component={StaffView} />
            <Route path='/Store' component={StoreView} />
            <Route path='/SupplyInStore' component={SupplyInStoreView} />
            <Route path='/User' component={UserView} />
        </div>);

  }
}
