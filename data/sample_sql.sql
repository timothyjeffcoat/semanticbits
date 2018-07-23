-- sample sql (should see 2 rows)
select ae.id, ae.safety_report_id, p.patient_age, p.patient_sex , d.medicinal_product, r.meddra_primary_term
from adverse_events ae 
join patients p on p.adverse_event_id = ae.id 
left join patient_drugs pd on pd.patient_id = p.id
join drugs d on d.id = pd.drug_id
left join patient_reactions pr on pr.patient_id = p.id
join reactions r on r.id = pr.reaction_id
where ae.safety_report_id = '4719690-9';