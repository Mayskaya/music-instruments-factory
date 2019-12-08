/* !!!!!!!!!!!!!!!!!!!!!!!!!! Publications !!!!!!!!!!!!!!!!!!!!!!!!!! */
CREATE PUBLICATION Centralized_db_publication
    FOR TABLE
        micrm_db.public.Car,
        micrm_db.public.Buyer,
        micrm_db.public.Staff,
        micrm_db.public.Store,
        micrm_db.public.Factory,
        micrm_db.public.GoodType,
        micrm_db.public.Good,
        micrm_db.public.Model,
        micrm_db.public.Mark,
        micrm_db.public.Country,
        micrm_db.public.Address;
