# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

Bonus: profile info

## projects
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      | not null
category    | text      | not null, indexed
goal_amt    | integer   | not null
start_date  | date      | not null
deadline    | date      | not null
creator_id  | integer   | not null, foreign key (references users), indexed

## categories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## project_categories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
category_id | integer   | not null, foreign key, indexed
project_id  | integer   | not null, foreign key, indexed


## project_backings
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
project_id      | integer   | not null, foreign key, indexed
backer_id       | integer   | not null, foreign key, indexed
pledge_amt      | integer   | not null

## updates
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
project_id      | integer   | not null, foreign key, indexed
title           | string    | not null
details         | text      |
