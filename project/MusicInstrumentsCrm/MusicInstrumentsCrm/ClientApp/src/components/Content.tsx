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
        <Route path='/index/Good' component={GoodView} />
        <Route path='/index/GoodType' component={GoodTypeView} />
        <Route path='/index/Address' component={AddressView} />
        <Route path='/index/Buyer' component={BuyerView} />
        <Route path='/index/Car' component={CarView} />
        <Route path='/index/Country' component={CountryView} />
        <Route path='/index/Delivery' component={DeliveryView} />
        <Route path='/index/Factory' component={FactoryView} />
        <Route path='/index/GoodInOffer' component={GoodInOfferView} />
        <Route path='/index/Mark' component={MarkView} />
        <Route path='/index/Model' component={ModelView} />
        <Route path='/index/Offer' component={OfferView} />
        <Route path='/index/Staff' component={StaffView} />
        <Route path='/index/Store' component={StoreView} />
        <Route path='/index/SupplyInStore' component={SupplyInStoreView} />
        <Route path='/index/User' component={UserView} />
      </div>);

  }
}
