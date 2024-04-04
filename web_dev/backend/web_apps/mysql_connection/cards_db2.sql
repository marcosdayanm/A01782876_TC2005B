USE cards_db;


select * from card;
select * from card_effect;
select * from effect;


select * from card as c
join effect as e
join card_effect as ce
on c.card_id = ce.card_id and e.effect_id = ce.effect_id
where c.card_id = 5;


