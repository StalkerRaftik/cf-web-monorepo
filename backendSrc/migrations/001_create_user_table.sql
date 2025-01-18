CREATE TABLE user (
    id TEXT NOT NULL PRIMARY KEY,
    is_active BOOLEAN DEFAULT TRUE,
    name TEXT,
    age INTEGER,
    city TEXT,
    coordinates TEXT, -- JSON as TEXT
    email TEXT,
    telegram_id TEXT,
    about TEXT,
    work TEXT,
    education TEXT,
    height INTEGER,
    weight INTEGER,
    gender TEXT CHECK (gender IN ('male', 'female')),
    orientation TEXT CHECK (orientation IN ('straight', 'gay', 'bisexual')),
    languages TEXT DEFAULT '[]', -- JSON as TEXT
    looking_for TEXT DEFAULT '[]', -- JSON as TEXT
    created_at TEXT DEFAULT (datetime('now')),
    updated_at TEXT DEFAULT (datetime('now'))
);

CREATE INDEX idx_user_telegram_id ON user(telegram_id);