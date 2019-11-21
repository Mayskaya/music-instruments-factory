import React from 'react';
import { Switch, Route, Router } from 'react-router';
import GoodView from './contents/GoodView';
import GoodTypeView from './contents/GoodTypeView';
import { BrowserRouter, Link } from 'react-router-dom';
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

import AddressAdd from './contents/add/AddressAdd';
import GoodAdd from './contents/add/GoodAdd';
import GoodTypeAdd from './contents/add/GoodTypeAdd';
import GoodInOfferAdd from './contents/add/GoodInOfferAdd';
import BuyerAdd from './contents/add/BuyerAdd';
import CarAdd from './contents/add/CarAdd';
import CountryAdd from './contents/add/CountryAdd';
import FactoryAdd from './contents/add/FactoryAdd';
import DeliveryAdd from './contents/add/DeliveryAdd';
import MarkAdd from './contents/add/MarkAdd';
import ModelAdd from './contents/add/ModelAdd';
import OfferAdd from './contents/add/OfferAdd';
import StaffAdd from './contents/add/StaffAdd';
import StoreAdd from './contents/add/StoreAdd';
import SupplyInStoreAdd from './contents/add/SupplyInStoreAdd';
import UserAdd from './contents/add/UserAdd';

export default class Content extends React.Component<{}, {}> {
  static map(arg0: (route: any, i: any) => JSX.Element) {
    throw new Error("Method not implemented.");
  }
  public render() {
    return (
      <div className="Content">

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

        <Route path='/index/GoodAdd' component={GoodAdd} />
        <Route path='/index/GoodTypeAdd' component={GoodTypeAdd} />
        <Route path='/index/AddressAdd' component={AddressAdd} />
        <Route path='/index/BuyerAdd' component={BuyerAdd} />
        <Route path='/index/CarAdd' component={CarAdd} />
        <Route path='/index/CountryAdd' component={CountryAdd} />
        <Route path='/index/DeliveryAdd' component={DeliveryAdd} />
        <Route path='/index/FactoryAdd' component={FactoryAdd} />
        <Route path='/index/GoodInOfferAdd' component={GoodInOfferAdd} />
        <Route path='/index/MarkAdd' component={MarkAdd} />
        <Route path='/index/ModelAdd' component={ModelAdd} />
        <Route path='/index/OfferAdd' component={OfferAdd} />
        <Route path='/index/StaffAdd' component={StaffAdd} />
        <Route path='/index/StoreAdd' component={StoreAdd} />
        <Route path='/index/SupplyInStoreAdd' component={SupplyInStoreAdd} />
        <Route path='/index/UserAdd' component={UserAdd} />
      </div>);

  }
}
