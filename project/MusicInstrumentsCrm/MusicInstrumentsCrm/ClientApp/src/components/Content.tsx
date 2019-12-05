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

import AddressEdit from './contents/edit/AddressEdit';
import GoodEdit from './contents/edit/GoodEdit';
import GoodTypeEdit from './contents/edit/GoodTypeEdit';
import GoodInOfferEdit from './contents/edit/GoodInOfferEdit';
import BuyerEdit from './contents/edit/BuyerEdit';
import CarEdit from './contents/edit/CarEdit';
import CountryEdit from './contents/edit/CountryEdit';
import FactoryEdit from './contents/edit/FactoryEdit';
import DeliveryEdit from './contents/edit/DeliveryEdit';
import MarkEdit from './contents/edit/MarkEdit';
import ModelEdit from './contents/edit/ModelEdit';
import OfferEdit from './contents/edit/OfferEdit';
import StaffEdit from './contents/edit/StaffEdit';
import StoreEdit from './contents/edit/StoreEdit';
import SupplyInStoreEdit from './contents/edit/SupplyInStoreEdit';
import UserEdit from './contents/edit/UserEdit';

export default class Content extends React.Component<{}, {}> {
  static map(arg0: (route: any, i: any) => JSX.Element) {
    throw new Error("Method not implemented.");
  }
  public render() {
    return (
      <div className="Content">
        <Route path='/index/Good' component={GoodView} exact={true}/>
        <Route path='/index/GoodType' component={GoodTypeView} exact={true}/>
        <Route path='/index/Address' component={AddressView} exact={true}/>
        <Route path='/index/Buyer' component={BuyerView} exact={true}/>
        <Route path='/index/Car' component={CarView} exact={true}/>
        <Route path='/index/Country' component={CountryView} exact={true}/>
        <Route path='/index/Delivery' component={DeliveryView} exact={true}/>
        <Route path='/index/Factory' component={FactoryView} exact={true}/>
        <Route path='/index/GoodInOffer' component={GoodInOfferView} exact={true}/>
        <Route path='/index/Mark' component={MarkView} exact={true}/>
        <Route path='/index/Model' component={ModelView} exact={true}/>
        <Route path='/index/Offer' component={OfferView} exact={true}/>
        <Route path='/index/Staff' component={StaffView} exact={true}/>
        <Route path='/index/Store' component={StoreView} exact={true}/>
        <Route path='/index/SupplyInStore' component={SupplyInStoreView} exact={true}/>
        <Route path='/index/User' component={UserView} exact={true}/>

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

        <Route path='/index/Good/:id' component={GoodEdit} />
        <Route path='/index/GoodType/:id' component={GoodTypeEdit} />
        <Route path='/index/Address/:id' component={AddressEdit} />
        <Route path='/index/Buyer/:id' component={BuyerEdit} />
        <Route path='/index/Car/:id' component={CarEdit} />
        <Route path='/index/Country/:id' component={CountryEdit} />
        <Route path='/index/Delivery/:id' component={DeliveryEdit} />
        <Route path='/index/Factory/:id' component={FactoryEdit} />
        <Route path='/index/GoodInOffer/:id' component={GoodInOfferEdit} />
        <Route path='/index/Mark/:id' component={MarkEdit} />
        <Route path='/index/Model/:id' component={ModelEdit} />
        <Route path='/index/Offer/:id' component={OfferEdit} />
        <Route path='/index/Staff/:id' component={StaffEdit} />
        <Route path='/index/Store/:id' component={StoreEdit} />
        <Route path='/index/SupplyInStore/:id' component={SupplyInStoreEdit} />
        <Route path='/index/User/:id' component={UserEdit} />
      </div>);

  }
}
