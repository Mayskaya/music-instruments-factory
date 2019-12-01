#!/bin/bash
echo "Initializing schema"

FILES=("/sql-data/create_address_table.sql" 
"/sql-data/create_role_table.sql"
"/sql-data/create_role_permission_table.sql"
"/sql-data/create_permission_table.sql"
"/sql-data/create_user_table.sql" 
"/sql-data/create_country_table.sql" 
"/sql-data/create_mark_table.sql" 
"/sql-data/create_model_table.sql" 
"/sql-data/create_car_table.sql" 
"/sql-data/create_factory_table.sql" 
"/sql-data/create_good_type_table.sql" 
"/sql-data/create_buyer_table.sql" 
"/sql-data/create_staff_table.sql" 
"/sql-data/create_delivery_table.sql" 
"/sql-data/create_good_table.sql" 
"/sql-data/create_store_table.sql" 
"/sql-data/create_offer_table.sql" 
"/sql-data/create_good_in_offer_table.sql" 
"/sql-data/create_supply_in_store_table.sql")

echo "Presented file in directory /sql-data:"
for f in ${FILES[@]}
do 
	echo "			>>> $f"
done

echo "Starting loop";
for f in ${FILES[@]}
do
	echo "Executing >>> $f"
	psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" < "$f"
done

FILES=("/sql-data-init/init_address_table.sql" 
"/sql-data-init/init_role_table.sql"
"/sql-data-init/init_role_permission_table.sql"
"/sql-data-init/init_permission_table.sql"
"/sql-data-init/init_user_table.sql" 
"/sql-data-init/init_country_table.sql" 
"/sql-data-init/init_mark_table.sql" 
"/sql-data-init/init_model_table.sql" 
"/sql-data-init/init_car_table.sql" 
"/sql-data-init/init_factory_table.sql" 
"/sql-data-init/init_good_type_table.sql" 
"/sql-data-init/init_buyer_table.sql" 
"/sql-data-init/init_staff_table.sql" 
"/sql-data-init/init_delivery_table.sql" 
"/sql-data-init/init_good_table.sql" 
"/sql-data-init/init_store_table.sql" 
"/sql-data-init/init_offer_table.sql" 
"/sql-data-init/init_good_in_offer_table.sql" 
"/sql-data-init/init_supply_in_store_table.sql")

echo "Starting loop";
for f in ${FILES[@]}
do
	if test -f "$f"; then
		echo "Executing $f"
		psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" < "$f" ;
	else
		echo "File $f not founded" 
	fi
done

echo "Finishing Initializing. Hooray"