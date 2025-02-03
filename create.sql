drop schema john CASCADE;
create schema john

create john.user {
    user_id uuid primary key,
    email text,
    name text,

}

create john.ticket {
    ticket_id uuid primary key,
    requester_id uuid not null references john.user (user_id),
    assignee_id uuid not null references john.user (user_id),
    context text,
    status text,
    start_date timestamp,
    end_date timestamp,
    duration int
}

insert into john.user (user_id, email, name) values (1, 'John', '42e8bc9f-807b-4f70-9a8c-8fc69b44507e');
insert into john.user (user_id, email, name) values (2, 'Laycon', '1d3b5fc5-94b0-4aaf-86ba-8fb01fd085b4');