create john_user {
    user_id uuid primary key,
    email text,
    name text,

}

create john.ticket {
    ticket_id uuid primary key,
    requester_id uuid references john.user (user_id),
    assignee_id uuid references john.user (user_id),
    context text,
    status text,
    start_date timestamp,
    end_date timestamp,
    duration int
}