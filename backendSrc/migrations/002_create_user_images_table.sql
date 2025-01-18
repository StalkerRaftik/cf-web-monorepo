CREATE TABLE user_image (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    image_url TEXT NOT NULL,
    order INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE
);

CREATE INDEX idx_user_image_user_id ON user_image(user_id);
CREATE INDEX idx_user_image_order ON user_image(order); 