\c tweedr_dev
DROP TABLE tweeds;
CREATE TABLE  tweeds (
  id BIGSERIAL PRIMARY KEY,
  tweed_text VARCHAR(1024),
  tweed_time BIGINT
);
