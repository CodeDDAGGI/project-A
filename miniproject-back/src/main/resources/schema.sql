-- USER, ROLE, USER_ROLE, NEWS, IMG, COMMENT, LIKE
DROP TABLE IF EXISTS user_tb;
DROP TABLE IF EXISTS role_tb;
DROP TABLE IF EXISTS user_role_tb;
DROP TABLE IF EXISTS news_tb;
DROP TABLE IF EXISTS img_tb;
DROP TABLE IF EXISTS comment_tb;
DROP TABLE IF EXISTS like_tb;

CREATE TABLE user_tb
(
    user_id  BIGINT       NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    name     VARCHAR(255) NOT NULL,
    email    VARCHAR(255) NOT NULL,
    img      TEXT         NOT NULL DEFAULT 'https://firebasestorage.googleapis.com/v0/b/userprofile-fcfbf.appspot.com/o/user%2FSample_User_Icon.png?alt=media&token=59bc7778-5086-4c0f-8178-3d12ba0c5e56'
);

CREATE TABLE role_tb
(
    role_id   BIGINT AUTO_INCREMENT PRIMARY KEY,
    role_name VARCHAR(255) NOT NULL UNIQUE
);

INSERT INTO role_tb
VALUES (DEFAULT, 'ROLE_USER'),
       (DEFAULT, 'ROLE_MANAGER'),
       (DEFAULT, 'ROLE_ADMIN');

CREATE TABLE user_role_tb
(
    user_role_id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id      BIGINT NOT NULL,
    role_id      BIGINT NOT NULL
);

CREATE TABLE news_tb
(
    news_id         BIGINT       NOT NULL PRIMARY KEY AUTO_INCREMENT,
    news_title      VARCHAR(255) NOT NULL,
    news_content    TEXT  NOT NULL,
    user_id         BIGINT       NOT NULL,
    news_view_count BIGINT       NOT NULL DEFAULT 0
);
CREATE TABLE img_tb
(
    img_id  BIGINT   NOT NULL AUTO_INCREMENT PRIMARY KEY,
    img_url LONGTEXT NOT NULL,
    news_id BIGINT   NOT NULL
);
CREATE TABLE comment_tb
(
    comment_id      BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    comment_content VARCHAR(255),
    user_id         BIGINT NOT NULL,
    news_id         BIGINT NOT NULL
);
CREATE TABLE like_tb
(
    like_id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT,
    news_id BIGINT
)