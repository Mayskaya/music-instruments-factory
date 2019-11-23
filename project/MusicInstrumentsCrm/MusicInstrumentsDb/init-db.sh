#!/bin/bash
echo "Initializing schema"
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" < /sql-data/schema.sql

FILES=("/sql-data-init/init_address_table.sql" 
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

for f in ${FILES[@]}
do
	echo "Start loop";
	if test -f "$f"; then
		echo "Executing $f"
		psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" < "$f" ;
	else
		echo "File $f not founded" 
	fi
done
# echo "Initializing address_table"
# psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" < /sql-data-init/init_address_table.sql
# 
# echo "Initializing user_table"
# psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" < /sql-data-init/init_user_table.sql
# 
# echo "Initializing country_table"
# psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" < /sql-data-init/init_country_table.sql
# 
# echo "Initializing mark_table"
# psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" < /sql-data-init/init_mark_table.sql
# 
# echo "Initializing model_table"
# psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" < /sql-data-init/init_model_table.sql
# 
# echo "Initializing car_table"
# psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" < /sql-data-init/init_car_table.sql
# 
# echo "Initializing factory_table"
# psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" < /sql-data-init/init_factory_table.sql
# 
# echo "Initializing good_type_table"
# psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" < /sql-data-init/init_good_type_table.sql
# 
# echo "Initializing buyer_table"
# psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" < /sql-data-init/init_buyer_table.sql
# 
# echo "Initializing staff_table"
# psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" < /sql-data-init/init_staff_table.sql
# 
# echo "Initializing delivery_table"
# psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" < /sql-data-init/init_delivery_table.sql
# 
# echo "Initializing good_table"
# psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" < /sql-data-init/init_good_table.sql
# 
# echo "Initializing store_table"
# psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" < /sql-data-init/init_store_table.sql
# 
# echo "Initializing offer_table"
# psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" < /sql-data-init/init_offer_table.sql
# 
# echo "Initializing good_in_offer_table"
# psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" < /sql-data-init/init_good_in_offer_table.sql
# 
# echo "Initializing supply_in_store_table"
# psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" < /sql-data-init/init_supply_in_store_table.sql
# 
echo "Finishing Initializing. Hooray"