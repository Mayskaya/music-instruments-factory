import React from 'react';
import GoodView from './contents/GoodView';
import GoodTypeView from './contents/GoodTypeView';
import {Route} from 'react-router-dom';
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
    public render() {
        return (
            <div className="Content">

                <Route path='/index/Good' component={GoodView} exact strict/>
                <Route path='/index/GoodType' component={GoodTypeView} exact strict/>
                <Route path='/index/Address' component={AddressView} exact strict/>
                <Route path='/index/Buyer' component={BuyerView} exact strict/>
                <Route path='/index/Car' component={CarView} exact strict/>
                <Route path='/index/Country' component={CountryView} exact strict/>
                <Route path='/index/Delivery' component={DeliveryView} exact strict/>
                <Route path='/index/Factory' component={FactoryView} exact strict/>
                <Route path='/index/GoodInOffer' component={GoodInOfferView} exact strict/>
                <Route path='/index/Mark' component={MarkView} exact strict/>
                <Route path='/index/Model' component={ModelView} exact strict/>
                <Route path='/index/Offer' component={OfferView} exact strict/>
                <Route path='/index/Staff' component={StaffView} exact strict/>
                <Route path='/index/Store' component={StoreView} exact strict/>
                <Route path='/index/SupplyInStore' component={SupplyInStoreView} exact strict/>
                <Route path='/index/User' component={UserView} exact strict/>

                <Route path='/index/GoodAdd' component={GoodAdd}/>
                <Route path='/index/GoodTypeAdd' component={GoodTypeAdd}/>
                <Route path='/index/AddressAdd' component={AddressAdd}/>
                <Route path='/index/BuyerAdd' component={BuyerAdd}/>
                <Route path='/index/CarAdd' component={CarAdd}/>
                <Route path='/index/CountryAdd' component={CountryAdd}/>
                <Route path='/index/DeliveryAdd' component={DeliveryAdd}/>
                <Route path='/index/FactoryAdd' component={FactoryAdd}/>
                <Route path='/index/GoodInOfferAdd' component={GoodInOfferAdd}/>
                <Route path='/index/MarkAdd' component={MarkAdd}/>
                <Route path='/index/ModelAdd' component={ModelAdd}/>
                <Route path='/index/OfferAdd' component={OfferAdd}/>
                <Route path='/index/StaffAdd' component={StaffAdd}/>
                <Route path='/index/StoreAdd' component={StoreAdd}/>
                <Route path='/index/SupplyInStoreAdd' component={SupplyInStoreAdd}/>
                <Route path='/index/UserAdd' component={UserAdd}/>

                <Route path='/index/Good/edit/:id' component={GoodEdit} exact strict/>
                <Route path='/index/GoodType/edit/:id' component={GoodTypeEdit}/>
                <Route path='/index/Address/edit/:id' component={AddressEdit}/>
                <Route path='/index/Buyer/edit/:id' component={BuyerEdit}/>
                <Route path='/index/Car/edit/:id' component={CarEdit}/>
                <Route path='/index/Country/edit/:id' component={CountryEdit}/>
                <Route path='/index/Delivery/edit/:id' component={DeliveryEdit}/>
                <Route path='/index/Factory/edit/:id' component={FactoryEdit}/>
                <Route path='/index/GoodInOffer/edit/:id' component={GoodInOfferEdit}/>
                <Route path='/index/Mark/edit/:id' component={MarkEdit}/>
                <Route path='/index/Model/edit/:id' component={ModelEdit}/>
                <Route path='/index/Offer/edit/:id' component={OfferEdit}/>
                <Route path='/index/Staff/edit/:id' component={StaffEdit}/>
                <Route path='/index/Store/edit/:id' component={StoreEdit}/>
                <Route path='/index/SupplyInStore/edit/:id' component={SupplyInStoreEdit}/>
                <Route path='/index/User/edit/:id' component={UserEdit}/>

            </div>);
    }
}
