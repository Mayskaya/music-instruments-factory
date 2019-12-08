# MiCRM database subproject

## Build docker image
```
docker build -t micrm-db:<tag> .
```

## Run MiCRM image
```
docker run --rm -it -p 5432:5432 micrm-db:<tag> 
```


## Table order
1. __EFMigrationsHistory
1. Address
1. AspNetRoles
1. AspNetUsers
1. Country
1. DeviceCodes
1. GoodType
1. PersistedGrants
1. Factory
1. Store
1. AspNetRoleClaims
1. AspNetUserClaims
1. AspNetUserLogins
1. AspNetUserRoles
1. AspNetUserTokens
1. Buyer
1. Staff
1. Mark
1. Good
1. Model
1. SupplyInStore
1. Car
1. Delivery
1. Offer
1. GoodInOffer


```
CREATE PUBLICATION micrm_pub FOR TABLE "Car", "Buyer", "Staff", "Store", "Factory", "GoodType", "Good", "Model", "Mark", "Country", "Address";


CREATE SUBSCRIPTION micrm_suba
	CONNECTION 'host=db dbname=micrm_db user=admin port=5432 password=admin' 
	PUBLICATION micrm_pub;
```