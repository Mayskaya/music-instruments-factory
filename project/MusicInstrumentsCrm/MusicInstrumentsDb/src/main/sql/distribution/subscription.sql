/* !!!!!!!!!!!!!!!!!!!!!!!!!! Subscriptions !!!!!!!!!!!!!!!!!!!!!!!!!! */
CREATE SUBSCRIPTION Centralized_db_subscription
    CONNECTION 'host=micrm_db_center dbname=micrm_db user=replica_user port=5436'
    PUBLICATION Centralized_db_publication;


