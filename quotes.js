const dailyQuotes = {
    "1-1": { quote: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
    "1-2": { quote: "Whatever you are, be a good one.", author: "Abraham Lincoln" },
    "1-3": { quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    "1-4": { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    "1-5": { quote: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    "1-6": { quote: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    "1-7": { quote: "Whether you think you can or you think you can’t, you’re right.", author: "Henry Ford" },
    "1-8": { quote: "Act as if what you do makes a difference. It does.", author: "William James" },
    "1-9": { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    "1-10": { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    // January 11th to 31st
    "1-11": { quote: "Change your thoughts and you change your world.", author: "Norman Vincent Peale" },
    "1-12": { quote: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
    "1-13": { quote: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
    "1-14": { quote: "Perseverance is not a long race; it is many short races one after the other.", author: "Walter Elliot" },
    "1-15": { quote: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    "1-16": { quote: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
    "1-17": { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    "1-18": { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    "1-19": { quote: "You define your own life. Don’t let other people write your script.", author: "Oprah Winfrey" },
    "1-20": { quote: "The best revenge is massive success.", author: "Frank Sinatra" },
    "1-21": { quote: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
    "1-22": { quote: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
    "1-23": { quote: "Don’t be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
    "1-24": { quote: "I am not a product of my circumstances. I am a product of my decisions.", author: "Stephen Covey" },
    "1-25": { quote: "The most common way people give up their power is by thinking they don’t have any.", author: "Alice Walker" },
    "1-26": { quote: "An unexamined life is not worth living.", author: "Socrates" },
    "1-27": { quote: "Do what is right, not what is easy nor what is popular.", author: "Roy T. Bennett" },
    "1-28": { quote: "Your time is limited, don’t waste it living someone else’s life.", author: "Steve Jobs" },
    "1-29": { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    "1-30": { quote: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington" },
    "1-31": { quote: "You don’t have to be great to start, but you have to start to be great.", author: "Zig Ziglar" },

    // February 1st to 28th
    "2-1": { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    "2-2": { quote: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
    "2-3": { quote: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson" },
    "2-4": { quote: "Go confidently in the direction of your dreams! Live the life you've imagined.", author: "Henry David Thoreau" },
    "2-5": { quote: "Happiness is not by chance, but by choice.", author: "Jim Rohn" },
    "2-6": { quote: "The only way to achieve the impossible is to believe it is possible.", author: "Charles Kingsleigh" },
    "2-7": { quote: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
    "2-8": { quote: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
    "2-9": { quote: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    "2-10": { quote: "Failure is not the opposite of success; it’s part of success.", author: "Arianna Huffington" },
    "2-11": { quote: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
    "2-12": { quote: "Do what you feel in your heart to be right – for you’ll be criticized anyway.", author: "Eleanor Roosevelt" },
    "2-13": { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    "2-14": { quote: "Love the life you live. Live the life you love.", author: "Bob Marley" },
    "2-15": { quote: "Don’t wait. The time will never be just right.", author: "Napoleon Hill" },
    "2-16": { quote: "Dream big and dare to fail.", author: "Norman Vaughan" },
    "2-17": { quote: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    "2-18": { quote: "What we think, we become.", author: "Buddha" },
    "2-19": { quote: "You can waste your lives drawing lines. Or you can live your life crossing them.", author: "Shonda Rhimes" },
    "2-20": { quote: "Life isn’t about finding yourself. Life is about creating yourself.", author: "George Bernard Shaw" },
    "2-21": { quote: "If you cannot do great things, do small things in a great way.", author: "Napoleon Hill" },
    "2-22": { quote: "Success is how high you bounce when you hit bottom.", author: "George S. Patton" },
    "2-23": { quote: "Life is 10% what happens to you and 90% how you react to it.", author: "Charles R. Swindoll" },
    "2-24": { quote: "Our lives begin to end the day we become silent about things that matter.", author: "Martin Luther King Jr." },
    "2-25": { quote: "There is no substitute for hard work.", author: "Thomas Edison" },
    "2-26": { quote: "Don’t be pushed by your problems. Be led by your dreams.", author: "Ralph Waldo Emerson" },
    "2-27": { quote: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
    "2-28": { quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.", author: "Dr. Seuss" },

    // March 1st to 31st
    "3-1": { quote: "Your life does not get better by chance, it gets better by change.", author: "Jim Rohn" },
    "3-2": { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    "3-3": { quote: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
    "3-4": { quote: "Don’t count the days, make the days count.", author: "Muhammad Ali" },
    "3-5": { quote: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" },
    "3-6": { quote: "Difficulties in life are intended to make us better, not bitter.", author: "Dan Reeves" },
    "3-7": { quote: "The best preparation for tomorrow is doing your best today.", author: "H. Jackson Brown, Jr." },
    "3-8": { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    "3-9": { quote: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
    "3-10": { quote: "You become what you believe.", author: "Oprah Winfrey" },
    // More months (April to December) will follow this same structure, continuing with quotes and authors for each day.
        // March 11th to 31st
        "3-11": { quote: "Opportunities don't happen, you create them.", author: "Chris Grosser" },
    "3-12": { quote: "Your limitation—it's only your imagination.", author: "Unknown" },
    "3-13": { quote: "Great things never come from comfort zones.", author: "Unknown" },
    "3-14": { quote: "Dream it. Wish it. Do it.", author: "Unknown" },
    "3-15": { quote: "Success doesn't just find you. You have to go out and get it.", author: "Unknown" },
    "3-16": { quote: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Unknown" },
    "3-17": { quote: "Don't stop when you're tired. Stop when you're done.", author: "Unknown" },
    "3-18": { quote: "Wake up with determination. Go to bed with satisfaction.", author: "Unknown" },
    "3-19": { quote: "Do something today that your future self will thank you for.", author: "Unknown" },
    "3-20": { quote: "Little things make big days.", author: "Unknown" },
    "3-21": { quote: "It's going to be hard, but hard does not mean impossible.", author: "Unknown" },
    "3-22": { quote: "Don’t wait for opportunity. Create it.", author: "Unknown" },
    "3-23": { quote: "Change your life today. Don't gamble on the future, act now, without delay.", author: "Simone de Beauvoir" },
    "3-24": { quote: "The key to success is to focus on goals, not obstacles.", author: "Unknown" },
    "3-25": { quote: "Dream bigger. Do bigger.", author: "Unknown" },
    "3-26": { quote: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
    "3-27": { quote: "Keep going. Everything you need will come to you at the perfect time.", author: "Unknown" },
    "3-28": { quote: "The harder you work, the luckier you get.", author: "Gary Player" },
    "3-29": { quote: "The man who has confidence in himself gains the confidence of others.", author: "Hasidic Proverb" },
    "3-30": { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    "3-31": { quote: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon" },

    // April 1st to 30th
    "4-1": { quote: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
    "4-2": { quote: "In the end, we only regret the chances we didn’t take.", author: "Lewis Carroll" },
    "4-3": { quote: "Failure is the condiment that gives success its flavor.", author: "Truman Capote" },
    "4-4": { quote: "Don’t be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
    "4-5": { quote: "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.", author: "Colin Powell" },
    "4-6": { quote: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    "4-7": { quote: "Don’t raise your voice, improve your argument.", author: "Desmond Tutu" },
    "4-8": { quote: "Successful people do what unsuccessful people are not willing to do.", author: "Jim Rohn" },
    "4-9": { quote: "What seems to us as bitter trials are often blessings in disguise.", author: "Oscar Wilde" },
    "4-10": { quote: "If you are not willing to risk the usual, you will have to settle for the ordinary.", author: "Jim Rohn" },
    "4-11": { quote: "The biggest risk is not taking any risk.", author: "Mark Zuckerberg" },
    "4-12": { quote: "The only way to achieve the impossible is to believe it is possible.", author: "Charles Kingsleigh" },
    "4-13": { quote: "Opportunities don’t happen. You create them.", author: "Chris Grosser" },
    "4-14": { quote: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
    "4-15": { quote: "It’s not whether you get knocked down, it’s whether you get up.", author: "Vince Lombardi" },
    "4-16": { quote: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    "4-17": { quote: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
    "4-18": { quote: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
    "4-19": { quote: "Believe you can and you’re halfway there.", author: "Theodore Roosevelt" },
    "4-20": { quote: "Action is the foundational key to all success.", author: "Pablo Picasso" },
    "4-21": { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    "4-22": { quote: "Don’t count the days, make the days count.", author: "Muhammad Ali" },
    "4-23": { quote: "Do not wait to strike till the iron is hot, but make it hot by striking.", author: "William Butler Yeats" },
    "4-24": { quote: "What we achieve inwardly will change outer reality.", author: "Plutarch" },
    "4-25": { quote: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
    "4-26": { quote: "You have to learn the rules of the game. And then you have to play better than anyone else.", author: "Albert Einstein" },
    "4-27": { quote: "There are no shortcuts to any place worth going.", author: "Beverly Sills" },
    "4-28": { quote: "Winning isn’t everything, but wanting to win is.", author: "Vince Lombardi" },
    "4-29": { quote: "If you really want to do something, you’ll find a way. If you don’t, you’ll find an excuse.", author: "Jim Rohn" },
    "4-30": { quote: "Our greatest glory is not in never falling, but in rising every time we fall.", author: "Confucius" },

    // May 1st to 31st
    "5-1": { quote: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon" },
    "5-2": { quote: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
    "5-3": { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    "5-4": { quote: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    "5-5": { quote: "Fall seven times, stand up eight.", author: "Japanese Proverb" },
    "5-6": { quote: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
    "5-7": { quote: "Dream big and dare to fail.", author: "Norman Vaughan" },
    "5-8": { quote: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    "5-9": { quote: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
    "5-10": { quote: "The harder the conflict, the more glorious the triumph.", author: "Thomas Paine" },
    "5-11": { quote: "Don’t let what you cannot do interfere with what you can do.", author: "John Wooden" },
    "5-12": { quote: "It’s not whether you get knocked down; it’s whether you get up.", author: "Vince Lombardi" },
    "5-13": { quote: "I never dreamed about success. I worked for it.", author: "Estee Lauder" },
    "5-14": { quote: "Don’t be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
    "5-15": { quote: "Success is liking yourself, liking what you do, and liking how you do it.", author: "Maya Angelou" },
    "5-16": { quote: "The secret to success is to know something nobody else knows.", author: "Aristotle Onassis" },
    "5-17": { quote: "If you’re going through hell, keep going.", author: "Winston Churchill" },
    "5-18": { quote: "Do not be embarrassed by your failures, learn from them and start again.", author: "Richard Branson" },
    "5-19": { quote: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
    "5-20": { quote: "Opportunities multiply as they are seized.", author: "Sun Tzu" },
    "5-21": { quote: "Success depends upon previous preparation, and without such preparation there is sure to be failure.", author: "Confucius" },
    "5-22": { quote: "The successful warrior is the average man, with laser-like focus.", author: "Bruce Lee" },
    "5-23": { quote: "If you really look closely, most overnight successes took a long time.", author: "Steve Jobs" },
    "5-24": { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    "5-25": { quote: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    "5-26": { quote: "Success is stumbling from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
    "5-27": { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },

        // May 28th to 31st
    "5-28": { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    "5-29": { quote: "Success is how high you bounce when you hit bottom.", author: "George S. Patton" },
    "5-30": { quote: "Don’t be pushed by your problems. Be led by your dreams.", author: "Ralph Waldo Emerson" },
    "5-31": { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },

    // June 1st to 30th
    "6-1": { quote: "Courage is resistance to fear, mastery of fear—not absence of fear.", author: "Mark Twain" },
    "6-2": { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    "6-3": { quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
    "6-4": { quote: "Success consists of going from failure to failure without loss of enthusiasm.", author: "Winston Churchill" },
    "6-5": { quote: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
    "6-6": { quote: "Success is not measured by what you accomplish, but by the opposition you have encountered, and the courage with which you have maintained the struggle against overwhelming odds.", author: "Orison Swett Marden" },
    "6-7": { quote: "Failure is success in progress.", author: "Albert Einstein" },
    "6-8": { quote: "Success is a journey, not a destination.", author: "Ben Sweetland" },
    "6-9": { quote: "Perseverance is not a long race; it is many short races one after another.", author: "Walter Elliot" },
    "6-10": { quote: "Success is liking yourself, liking what you do, and liking how you do it.", author: "Maya Angelou" },
    "6-11": { quote: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
    "6-12": { quote: "Patience, persistence, and perspiration make an unbeatable combination for success.", author: "Napoleon Hill" },
    "6-13": { quote: "It does not matter how slowly you go, as long as you do not stop.", author: "Confucius" },
    "6-14": { quote: "You don’t have to be great to start, but you have to start to be great.", author: "Zig Ziglar" },
    "6-15": { quote: "Success is getting what you want. Happiness is wanting what you get.", author: "Dale Carnegie" },
    "6-16": { quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", author: "James Cameron" },
    "6-17": { quote: "Success isn't just about what you accomplish in your life; it's about what you inspire others to do.", author: "Unknown" },
    "6-18": { quote: "If you really want to do something, you'll find a way. If you don't, you'll find an excuse.", author: "Jim Rohn" },
    "6-19": { quote: "Failure is not the opposite of success; it’s part of success.", author: "Arianna Huffington" },
    "6-20": { quote: "Don't be afraid to fail. Be afraid not to try.", author: "Michael Jordan" },
    "6-21": { quote: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
    "6-22": { quote: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
    "6-23": { quote: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" },
    "6-24": { quote: "Success is best when it’s shared.", author: "Howard Schultz" },
    "6-25": { quote: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.", author: "Jordan Belfort" },
    "6-26": { quote: "Success isn't overnight. It's when every day you get a little better than the day before. It all adds up.", author: "Dwayne Johnson" },
    "6-27": { quote: "If you want to live a happy life, tie it to a goal, not to people or things.", author: "Albert Einstein" },
    "6-28": { quote: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
    "6-29": { quote: "The road to success and the road to failure are almost exactly the same.", author: "Colin R. Davis" },
    "6-30": { quote: "Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better.", author: "Jim Rohn" },

    // July 1st to 31st
    "7-1": { quote: "There is no elevator to success; you have to take the stairs.", author: "Zig Ziglar" },
    "7-2": { quote: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
    "7-3": { quote: "Success means doing the best we can with what we have. Success is the doing, not the getting; in the trying, not the triumph.", author: "Zig Ziglar" },
    "7-4": { quote: "Success is not measured by money or power or social rank. Success is measured by your discipline and inner peace.", author: "Mike Ditka" },
    "7-5": { quote: "It always seems impossible until it's done.", author: "Nelson Mandela" },
    "7-6": { quote: "The only way to achieve the impossible is to believe it is possible.", author: "Charles Kingsleigh" },
    "7-7": { quote: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
    "7-8": { quote: "The secret of success is to do the common thing uncommonly well.", author: "John D. Rockefeller Jr." },
    "7-9": { quote: "Success is achieved and maintained by those who try and keep trying.", author: "W. Clement Stone" },
    "7-10": { quote: "Success is liking yourself, liking what you do, and liking how you do it.", author: "Maya Angelou" },
    "7-11": { quote: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
    "7-12": { quote: "Success is getting what you want. Happiness is wanting what you get.", author: "Dale Carnegie" },
    "7-13": { quote: "Success is a state of mind. If you want success, start thinking of yourself as a success.", author: "Joyce Brothers" },
    "7-14": { quote: "Success is how high you bounce when you hit bottom.", author: "George S. Patton" },
    "7-15": { quote: "To succeed in life, you need two things: ignorance and confidence.", author: "Mark Twain" },
    "7-16": { quote: "Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome.", author: "Booker T. Washington" },
    "7-17": { quote: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
    "7-18": { quote: "Success comes from having dreams that are bigger than your fears.", author: "Terry Litwiller" },
    "7-19": { quote: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
    "7-20": { quote: "Success isn’t just about what you accomplish in your life; it’s about what you inspire others to do.", author: "Unknown" },
    "7-21": { quote: "To succeed in life, you need three things: a wishbone, a backbone, and a funny bone.", author: "Reba McEntire" },
    "7-22": { quote: "Success is never accidental.", author: "Jack Dorsey" },
    "7-23": { quote: "There is no substitute for hard work.", author: "Thomas Edison" },
    "7-24": { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    "7-25": { quote: "The successful warrior is the average man, with laser-like focus.", author: "Bruce Lee" },
    "7-26": { quote: "If you really look closely, most overnight successes took a long time.", author: "Steve Jobs" },
    "7-27": { quote: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    "7-28": { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    "7-29": { quote: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
    "7-30": { quote: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon" },
    "7-31": { quote: "The best revenge is massive success.", author: "Frank Sinatra" },
    "8-1": { quote: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    "8-2": { quote: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
    "8-3": { quote: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    "8-4": { quote: "I attribute my success to this: I never gave or took any excuse.", author: "Florence Nightingale" },
    "8-5": { quote: "Try not to become a man of success. Rather become a man of value.", author: "Albert Einstein" },
    "8-6": { quote: "Success seems to be connected with action. Successful people keep moving.", author: "Conrad Hilton" },
    "8-7": { quote: "The secret of success is to do the common things uncommonly well.", author: "John D. Rockefeller Jr." },
    "8-8": { quote: "Success is liking yourself, liking what you do, and liking how you do it.", author: "Maya Angelou" },
    "8-9": { quote: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    "8-10": { quote: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
    "8-11": { quote: "There is no elevator to success, you have to take the stairs.", author: "Zig Ziglar" },
    "8-12": { quote: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" },
    "8-13": { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    "8-14": { quote: "Success is not about the destination, it’s about the journey.", author: "Zig Ziglar" },
    "8-15": { quote: "Success is the result of preparation, hard work, and learning from failure.", author: "Colin Powell" },
    "8-16": { quote: "Believe you can and you’re halfway there.", author: "Theodore Roosevelt" },
    "8-17": { quote: "The only way to achieve the impossible is to believe it is possible.", author: "Charles Kingsleigh" },
    "8-18": { quote: "Don’t be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
    "8-19": { quote: "Success is 1% inspiration, 99% perspiration.", author: "Thomas Edison" },
    "8-20": { quote: "The secret of success is to know something nobody else knows.", author: "Aristotle Onassis" },
    "8-21": { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    "8-22": { quote: "Opportunities don’t happen. You create them.", author: "Chris Grosser" },
    "8-23": { quote: "The road to success is always under construction.", author: "Lily Tomlin" },
    "8-24": { quote: "Success is a state of mind. If you want success, start thinking of yourself as a success.", author: "Joyce Brothers" },
    "8-25": { quote: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
    "8-26": { quote: "It is better to fail in originality than to succeed in imitation.", author: "Herman Melville" },
    "8-27": { quote: "Success doesn’t just come and find you, you have to go out and get it.", author: "Unknown" },
    "8-28": { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    "8-29": { quote: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
    "8-30": { quote: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
    "8-31": { quote: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },

    // September 1st to 30th
    "9-1": { quote: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon" },
    "9-2": { quote: "Success is how high you bounce when you hit bottom.", author: "George S. Patton" },
    "9-3": { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    "9-4": { quote: "If you really want to do something, you'll find a way. If you don't, you'll find an excuse.", author: "Jim Rohn" },
    "9-5": { quote: "It does not matter how slowly you go, as long as you do not stop.", author: "Confucius" },
    "9-6": { quote: "Success isn’t just about what you accomplish in your life; it’s about what you inspire others to do.", author: "Unknown" },
    "9-7": { quote: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
    "9-8": { quote: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
    "9-9": { quote: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
    "9-10": { quote: "Success is a journey, not a destination.", author: "Ben Sweetland" },
    "9-11": { quote: "The secret to success is constancy to purpose.", author: "Benjamin Disraeli" },
    "9-12": { quote: "The harder the conflict, the more glorious the triumph.", author: "Thomas Paine" },
    "9-13": { quote: "Success is getting what you want. Happiness is wanting what you get.", author: "Dale Carnegie" },
    "9-14": { quote: "Success is how high you bounce when you hit bottom.", author: "George S. Patton" },
    "9-15": { quote: "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.", author: "Colin Powell" },
    "9-16": { quote: "Success is a journey, not a destination.", author: "Arthur Ashe" },
    "9-17": { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    "9-18": { quote: "Success isn’t about how much money you make, it’s about the difference you make in people’s lives.", author: "Michelle Obama" },
    "9-19": { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    "9-20": { quote: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
    "9-21": { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    "9-22": { quote: "Success is a state of mind. If you want success, start thinking of yourself as a success.", author: "Joyce Brothers" },
    "9-23": { quote: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
    "9-24": { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    "9-25": { quote: "Success is not measured by what you accomplish, but by the opposition you have encountered, and the courage with which you have maintained the struggle against overwhelming odds.", author: "Orison Swett Marden" },
    "9-26": { quote: "Success consists of going from failure to failure without loss of enthusiasm.", author: "Winston Churchill" },
    "9-27": { quote: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
    "9-28": { quote: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    "9-29": { quote: "Success isn’t about being the best. It’s about always getting better.", author: "Unknown" },
    "9-30": { quote: "Success is not about the destination; it's a journey.", author: "Zig Ziglar" },
        // October 1st to 31st
        "10-1": { quote: "Success is the result of preparation, hard work, and learning from failure.", author: "Colin Powell" },
    "10-2": { quote: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
    "10-3": { quote: "The only way to achieve the impossible is to believe it is possible.", author: "Charles Kingsleigh" },
    "10-4": { quote: "The best revenge is massive success.", author: "Frank Sinatra" },
    "10-5": { quote: "Success is getting what you want. Happiness is wanting what you get.", author: "Dale Carnegie" },
    "10-6": { quote: "Success is how high you bounce when you hit bottom.", author: "George S. Patton" },
    "10-7": { quote: "The secret to success is constancy to purpose.", author: "Benjamin Disraeli" },
    "10-8": { quote: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
    "10-9": { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    "10-10": { quote: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon" },
    "10-11": { quote: "You cannot swim for new horizons until you have courage to lose sight of the shore.", author: "William Faulkner" },
    "10-12": { quote: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
    "10-13": { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    "10-14": { quote: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
    "10-15": { quote: "Success is not measured by what you accomplish, but by the opposition you have encountered.", author: "Orison Swett Marden" },
    "10-16": { quote: "Success is a journey, not a destination.", author: "Arthur Ashe" },
    "10-17": { quote: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
    "10-18": { quote: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
    "10-19": { quote: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
    "10-20": { quote: "Success is liking yourself, liking what you do, and liking how you do it.", author: "Maya Angelou" },
    "10-21": { quote: "Success is the result of preparation, hard work, and learning from failure.", author: "Colin Powell" },
    "10-22": { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    "10-23": { quote: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
    "10-24": { quote: "Success is getting what you want. Happiness is wanting what you get.", author: "Dale Carnegie" },
    "10-25": { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    "10-26": { quote: "Success is how high you bounce when you hit bottom.", author: "George S. Patton" },
    "10-27": { quote: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon" },
    "10-28": { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    "10-29": { quote: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
    "10-30": { quote: "Success is not measured by what you accomplish, but by the opposition you have encountered.", author: "Orison Swett Marden" },
    "10-31": { quote: "Success is a journey, not a destination.", author: "Arthur Ashe" },

    // November 1st to 30th
    "11-1": { quote: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
    "11-2": { quote: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
    "11-3": { quote: "The only way to achieve the impossible is to believe it is possible.", author: "Charles Kingsleigh" },
    "11-4": { quote: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
    "11-5": { quote: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    "11-6": { quote: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
    "11-7": { quote: "Success is how high you bounce when you hit bottom.", author: "George S. Patton" },
    "11-8": { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    "11-9": { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    "11-10": { quote: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
    "11-11": { quote: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
    "11-12": { quote: "The secret of success is constancy to purpose.", author: "Benjamin Disraeli" },
    "11-13": { quote: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon" },
    "11-14": { quote: "Success is a journey, not a destination.", author: "Arthur Ashe" },
    "11-15": { quote: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
    "11-16": { quote: "Success is the result of preparation, hard work, and learning from failure.", author: "Colin Powell" },
    "11-17": { quote: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
    "11-18": { quote: "Success is getting what you want. Happiness is wanting what you get.", author: "Dale Carnegie" },
    "11-19": { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    "11-20": { quote: "Success is the result of preparation, hard work, and learning from failure.", author: "Colin Powell" },
    "11-21": { quote: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
    "11-22": { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    "11-23": { quote: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
    "11-24": { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    "11-25": { quote: "Success is a journey, not a destination.", author: "Arthur Ashe" },
    "11-26": { quote: "The secret to success is constancy to purpose.", author: "Benjamin Disraeli" },
    "11-27": { quote: "The only way to achieve the impossible is to believe it is possible.", author: "Charles Kingsleigh" },
    "11-28": { quote: "Success is how high you bounce when you hit bottom.", author: "George S. Patton" },
    "11-29": { quote: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
    "11-30": { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },

    // December 1st to 31st
    "12-1": { quote: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
    "12-2": { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    "12-3": { quote: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
    "12-4": { quote: "The secret to success is constancy to purpose.", author: "Benjamin Disraeli" },
    "12-5": { quote: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
    "12-6": { quote: "The only way to achieve the impossible is to believe it is possible.", author: "Charles Kingsleigh" },
    "12-7": { quote: "Success is how high you bounce when you hit bottom.", author: "George S. Patton" },
    "12-8": { quote: "Success is getting what you want. Happiness is wanting what you get.", author: "Dale Carnegie" },
    "12-9": { quote: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon" },
    "12-10": { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    "12-11": { quote: "Success is a journey, not a destination.", author: "Arthur Ashe" },
    "12-12": { quote: "Success is the result of preparation, hard work, and learning from failure.", author: "Colin Powell" },
    "12-13": { quote: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
    "12-14": { quote: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    "12-15": { quote: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
    "12-16": { quote: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
    "12-17": { quote: "Success is the result of preparation, hard work, and learning from failure.", author: "Colin Powell" },
    "12-18": { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    "12-19": { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    "12-20": { quote: "Success is not about the destination; it’s about the journey.", author: "Zig Ziglar" },
    "12-21": { quote: "The secret to success is constancy to purpose.", author: "Benjamin Disraeli" },
    "12-22": { quote: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
    "12-23": { quote: "Success is how high you bounce when you hit bottom.", author: "George S. Patton" },
    "12-24": { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    "12-25": { quote: "Success is getting what you want. Happiness is wanting what you get.", author: "Dale Carnegie" },
    "12-26": { quote: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
    "12-27": { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    "12-28": { quote: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
    "12-29": { quote: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
    "12-30": { quote: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
    "12-31": { quote: "The best way to predict your future is to create it.", author: "Peter Drucker" },





    };
    const dailyBibleVerses = {
    // January 1-31
    "1-1": { verse: "In the beginning, God created the heavens and the earth.", reference: "Genesis 1:1" },
    "1-2": { verse: "The Lord is my shepherd; I shall not want.", reference: "Psalm 23:1" },
    "1-3": { verse: "For I know the plans I have for you, declares the Lord.", reference: "Jeremiah 29:11" },
    "1-4": { verse: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.", reference: "Psalm 34:18" },
    "1-5": { verse: "Trust in the Lord with all your heart and lean not on your own understanding.", reference: "Proverbs 3:5" },
    "1-6": { verse: "For God so loved the world that he gave his one and only Son.", reference: "John 3:16" },
    "1-7": { verse: "The earth is the Lord’s, and everything in it.", reference: "Psalm 24:1" },
    "1-8": { verse: "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness.", reference: "Galatians 5:22" },
    "1-9": { verse: "The Lord is my light and my salvation—whom shall I fear?", reference: "Psalm 27:1" },
    "1-10": { verse: "I can do all things through Christ who strengthens me.", reference: "Philippians 4:13" },
    "1-11": { verse: "The Lord will fight for you; you need only to be still.", reference: "Exodus 14:14" },
    "1-12": { verse: "Cast all your anxiety on him because he cares for you.", reference: "1 Peter 5:7" },
    "1-13": { verse: "And we know that in all things God works for the good of those who love him.", reference: "Romans 8:28" },
    "1-14": { verse: "Be still, and know that I am God.", reference: "Psalm 46:10" },
    "1-15": { verse: "For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.", reference: "Romans 6:23" },
    "1-16": { verse: "The Lord is my refuge and my fortress, my God, in whom I trust.", reference: "Psalm 91:2" },
    "1-17": { verse: "Blessed are the meek, for they will inherit the earth.", reference: "Matthew 5:5" },
    "1-18": { verse: "The Lord is gracious and righteous; our God is full of compassion.", reference: "Psalm 116:5" },
    "1-19": { verse: "The Lord makes firm the steps of the one who delights in him.", reference: "Psalm 37:23" },
    "1-20": { verse: "Come to me, all you who are weary and burdened, and I will give you rest.", reference: "Matthew 11:28" },
    "1-21": { verse: "I have loved you with an everlasting love.", reference: "Jeremiah 31:3" },
    "1-22": { verse: "For we live by faith, not by sight.", reference: "2 Corinthians 5:7" },
    "1-23": { verse: "The Lord is near to all who call on him, to all who call on him in truth.", reference: "Psalm 145:18" },
    "1-24": { verse: "For I am the Lord who heals you.", reference: "Exodus 15:26" },
    "1-25": { verse: "Thanks be to God for his indescribable gift!", reference: "2 Corinthians 9:15" },
    "1-26": { verse: "I am the good shepherd. The good shepherd lays down his life for the sheep.", reference: "John 10:11" },
    "1-27": { verse: "The Lord is compassionate and gracious, slow to anger, abounding in love.", reference: "Psalm 103:8" },
    "1-28": { verse: "The Lord is my shepherd; I lack nothing.", reference: "Psalm 23:1" },
    "1-29": { verse: "For the word of the Lord is right and true; he is faithful in all he does.", reference: "Psalm 33:4" },
    "1-30": { verse: "I have told you these things, so that in me you may have peace.", reference: "John 16:33" },
    "1-31": { verse: "The Lord is my strength and my shield; my heart trusts in him, and he helps me.", reference: "Psalm 28:7" },

    // February 1-28
    "2-1": { verse: "The Lord your God is with you, the Mighty Warrior who saves.", reference: "Zephaniah 3:17" },
    "2-2": { verse: "The Lord is a refuge for the oppressed, a stronghold in times of trouble.", reference: "Psalm 9:9" },
    "2-3": { verse: "The name of the Lord is a fortified tower; the righteous run to it and are safe.", reference: "Proverbs 18:10" },
    "2-4": { verse: "He heals the brokenhearted and binds up their wounds.", reference: "Psalm 147:3" },
    "2-5": { verse: "The Lord is my light and my salvation; whom shall I fear?", reference: "Psalm 27:1" },
    "2-6": { verse: "For the Lord gives wisdom; from his mouth come knowledge and understanding.", reference: "Proverbs 2:6" },
    "2-7": { verse: "I will instruct you and teach you in the way you should go; I will counsel you with my loving eye on you.", reference: "Psalm 32:8" },
    "2-8": { verse: "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil.", reference: "Jeremiah 29:11" },
    "2-9": { verse: "Let all that you do be done in love.", reference: "1 Corinthians 16:14" },
    "2-10": { verse: "Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you.", reference: "Ephesians 4:32" },
    "2-11": { verse: "The Lord is righteous in all his ways and faithful in all he does.", reference: "Psalm 145:17" },
    "2-12": { verse: "You will keep in perfect peace those whose minds are steadfast, because they trust in you.", reference: "Isaiah 26:3" },
    "2-13": { verse: "Blessed are those who are persecuted because of righteousness, for theirs is the kingdom of heaven.", reference: "Matthew 5:10" },
    "2-14": { verse: "And we know that in all things God works for the good of those who love him.", reference: "Romans 8:28" },
    "2-15": { verse: "Let everything that has breath praise the Lord.", reference: "Psalm 150:6" },
    "2-16": { verse: "He gives strength to the weary and increases the power of the weak.", reference: "Isaiah 40:29" },
    "2-17": { verse: "The Lord is my shepherd, I lack nothing.", reference: "Psalm 23:1" },
    "2-18": { verse: "The Lord will fight for you; you need only to be still.", reference: "Exodus 14:14" },
    "2-19": { verse: "Cast all your anxiety on him because he cares for you.", reference: "1 Peter 5:7" },
    "2-20": { verse: "For we live by faith, not by sight.", reference: "2 Corinthians 5:7" },
    "2-21": { verse: "The Lord is near to all who call on him, to all who call on him in truth.", reference: "Psalm 145:18" },
    "2-22": { verse: "The Lord is good to those whose hope is in him, to the one who seeks him.", reference: "Lamentations 3:25" },
    "2-23": { verse: "You are the light of the world. A town built on a hill cannot be hidden.", reference: "Matthew 5:14" },
    "2-24": { verse: "I can do all things through Christ who strengthens me.", reference: "Philippians 4:13" },
    "2-25": { verse: "The Lord is my light and my salvation; whom shall I fear?", reference: "Psalm 27:1" },
    "2-26": { verse: "For I am the Lord who heals you.", reference: "Exodus 15:26" },
    "2-27": { verse: "Be still, and know that I am God.", reference: "Psalm 46:10" },
    "2-28": { verse: "The Lord is my refuge and my fortress, my God, in whom I trust.", reference: "Psalm 91:2" },
// March 1-31
        "3-1": { verse: "The Lord is my light and my salvation—whom shall I fear?", reference: "Psalm 27:1" },
        "3-2": { verse: "For I know the plans I have for you, declares the Lord.", reference: "Jeremiah 29:11" },
        "3-3": { verse: "Trust in the Lord with all your heart and lean not on your own understanding.", reference: "Proverbs 3:5" },
        "3-4": { verse: "I can do all things through Christ who strengthens me.", reference: "Philippians 4:13" },
        "3-5": { verse: "The Lord will fight for you; you need only to be still.", reference: "Exodus 14:14" },
        "3-6": { verse: "For God so loved the world that he gave his one and only Son.", reference: "John 3:16" },
        "3-7": { verse: "The Lord is my shepherd; I shall not want.", reference: "Psalm 23:1" },
        "3-8": { verse: "Blessed are the poor in spirit, for theirs is the kingdom of heaven.", reference: "Matthew 5:3" },
        "3-9": { verse: "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness.", reference: "Galatians 5:22" },
        "3-10": { verse: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.", reference: "Psalm 34:18" },
        "3-11": { verse: "The Lord is my strength and my shield; my heart trusts in him, and he helps me.", reference: "Psalm 28:7" },
        "3-12": { verse: "I will instruct you and teach you in the way you should go; I will counsel you with my loving eye on you.", reference: "Psalm 32:8" },
        "3-13": { verse: "The Lord is gracious and righteous; our God is full of compassion.", reference: "Psalm 116:5" },
        "3-14": { verse: "I have loved you with an everlasting love.", reference: "Jeremiah 31:3" },
        "3-15": { verse: "The Lord is near to all who call on him, to all who call on him in truth.", reference: "Psalm 145:18" },
        "3-16": { verse: "The Lord will fight for you; you need only to be still.", reference: "Exodus 14:14" },
        "3-17": { verse: "Cast all your anxiety on him because he cares for you.", reference: "1 Peter 5:7" },
        "3-18": { verse: "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil.", reference: "Jeremiah 29:11" },
        "3-19": { verse: "The Lord is compassionate and gracious, slow to anger, abounding in love.", reference: "Psalm 103:8" },
        "3-20": { verse: "I can do all things through Christ who strengthens me.", reference: "Philippians 4:13" },
        "3-21": { verse: "The Lord is righteous in all his ways and faithful in all he does.", reference: "Psalm 145:17" },
        "3-22": { verse: "For we live by faith, not by sight.", reference: "2 Corinthians 5:7" },
        "3-23": { verse: "The Lord is my light and my salvation; whom shall I fear?", reference: "Psalm 27:1" },
        "3-24": { verse: "For the word of the Lord is right and true; he is faithful in all he does.", reference: "Psalm 33:4" },
        "3-25": { verse: "The Lord is my refuge and my fortress, my God, in whom I trust.", reference: "Psalm 91:2" },
        "3-26": { verse: "Be still, and know that I am God.", reference: "Psalm 46:10" },
        "3-27": { verse: "I will bless the Lord at all times; his praise shall continually be in my mouth.", reference: "Psalm 34:1" },
        "3-28": { verse: "The Lord your God is with you, the Mighty Warrior who saves.", reference: "Zephaniah 3:17" },
        "3-29": { verse: "The name of the Lord is a fortified tower; the righteous run to it and are safe.", reference: "Proverbs 18:10" },
        "3-30": { verse: "Let all that you do be done in love.", reference: "1 Corinthians 16:14" },
        "3-31": { verse: "Now to him who is able to do immeasurably more than all we ask or imagine, according to his power that is at work within us.", reference: "Ephesians 3:20" },
    
        // April 1-30
        "4-1": { verse: "The Lord is my light and my salvation—whom shall I fear?", reference: "Psalm 27:1" },
        "4-2": { verse: "For I know the plans I have for you, declares the Lord.", reference: "Jeremiah 29:11" },
        "4-3": { verse: "Trust in the Lord with all your heart and lean not on your own understanding.", reference: "Proverbs 3:5" },
        "4-4": { verse: "I can do all things through Christ who strengthens me.", reference: "Philippians 4:13" },
        "4-5": { verse: "The Lord will fight for you; you need only to be still.", reference: "Exodus 14:14" },
        "4-6": { verse: "For God so loved the world that he gave his one and only Son.", reference: "John 3:16" },
        "4-7": { verse: "The Lord is my shepherd; I shall not want.", reference: "Psalm 23:1" },
        "4-8": { verse: "Blessed are the poor in spirit, for theirs is the kingdom of heaven.", reference: "Matthew 5:3" },
        "4-9": { verse: "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness.", reference: "Galatians 5:22" },
        "4-10": { verse: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.", reference: "Psalm 34:18" },
        "4-11": { verse: "The Lord is my strength and my shield; my heart trusts in him, and he helps me.", reference: "Psalm 28:7" },
        "4-12": { verse: "I will instruct you and teach you in the way you should go; I will counsel you with my loving eye on you.", reference: "Psalm 32:8" },
        "4-13": { verse: "The Lord is gracious and righteous; our God is full of compassion.", reference: "Psalm 116:5" },
        "4-14": { verse: "I have loved you with an everlasting love.", reference: "Jeremiah 31:3" },
        "4-15": { verse: "The Lord is near to all who call on him, to all who call on him in truth.", reference: "Psalm 145:18" },
        "4-16": { verse: "The Lord will fight for you; you need only to be still.", reference: "Exodus 14:14" },
        "4-17": { verse: "Cast all your anxiety on him because he cares for you.", reference: "1 Peter 5:7" },
        "4-18": { verse: "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil.", reference: "Jeremiah 29:11" },
        "4-19": { verse: "The Lord is compassionate and gracious, slow to anger, abounding in love.", reference: "Psalm 103:8" },
        "4-20": { verse: "I can do all things through Christ who strengthens me.", reference: "Philippians 4:13" },
        "4-21": { verse: "The Lord is righteous in all his ways and faithful in all he does.", reference: "Psalm 145:17" },
        "4-22": { verse: "For we live by faith, not by sight.", reference: "2 Corinthians 5:7" },
        "4-23": { verse: "The Lord is my light and my salvation; whom shall I fear?", reference: "Psalm 27:1" },
        "4-24": { verse: "For the word of the Lord is right and true; he is faithful in all he does.", reference: "Psalm 33:4" },
        "4-25": { verse: "The Lord is my refuge and my fortress, my God, in whom I trust.", reference: "Psalm 91:2" },
        "4-26": { verse: "Be still, and know that I am God.", reference: "Psalm 46:10" },
        "4-27": { verse: "I will bless the Lord at all times; his praise shall continually be in my mouth.", reference: "Psalm 34:1" },
        "4-28": { verse: "The Lord your God is with you, the Mighty Warrior who saves.", reference: "Zephaniah 3:17" },
        "4-29": { verse: "The name of the Lord is a fortified tower; the righteous run to it and are safe.", reference: "Proverbs 18:10" },
        "4-30": { verse: "Let all that you do be done in love.", reference: "1 Corinthians 16:14" },
        "5-1": { verse: "The Lord is my shepherd; I lack nothing.", reference: "Psalm 23:1" },
        "5-2": { verse: "Trust in the Lord with all your heart and lean not on your own understanding.", reference: "Proverbs 3:5" },
        "5-3": { verse: "I can do all things through Christ who strengthens me.", reference: "Philippians 4:13" },
        "5-4": { verse: "The Lord will fight for you; you need only to be still.", reference: "Exodus 14:14" },
        "5-5": { verse: "For God so loved the world that he gave his one and only Son.", reference: "John 3:16" },
        "5-6": { verse: "For the Lord your God is with you wherever you go.", reference: "Joshua 1:9" },
        "5-7": { verse: "The Lord is my light and my salvation—whom shall I fear?", reference: "Psalm 27:1" },
        "5-8": { verse: "And we know that in all things God works for the good of those who love him.", reference: "Romans 8:28" },
        "5-9": { verse: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.", reference: "Psalm 34:18" },
        "5-10": { verse: "The Lord is gracious and righteous; our God is full of compassion.", reference: "Psalm 116:5" },
        "5-11": { verse: "I will bless the Lord at all times; his praise shall continually be in my mouth.", reference: "Psalm 34:1" },
        "5-12": { verse: "For I know the plans I have for you, declares the Lord.", reference: "Jeremiah 29:11" },
        "5-13": { verse: "Be still, and know that I am God.", reference: "Psalm 46:10" },
        "5-14": { verse: "For we live by faith, not by sight.", reference: "2 Corinthians 5:7" },
        "5-15": { verse: "The name of the Lord is a fortified tower; the righteous run to it and are safe.", reference: "Proverbs 18:10" },
        "5-16": { verse: "Let all that you do be done in love.", reference: "1 Corinthians 16:14" },
        "5-17": { verse: "Cast all your anxiety on him because he cares for you.", reference: "1 Peter 5:7" },
        "5-18": { verse: "The Lord is my strength and my shield; my heart trusts in him, and he helps me.", reference: "Psalm 28:7" },
        "5-19": { verse: "The Lord is near to all who call on him, to all who call on him in truth.", reference: "Psalm 145:18" },
        "5-20": { verse: "The Lord is my refuge and my fortress, my God, in whom I trust.", reference: "Psalm 91:2" },
        "5-21": { verse: "For the word of the Lord is right and true; he is faithful in all he does.", reference: "Psalm 33:4" },
        "5-22": { verse: "The Lord is righteous in all his ways and faithful in all he does.", reference: "Psalm 145:17" },
        "5-23": { verse: "I will instruct you and teach you in the way you should go; I will counsel you with my loving eye on you.", reference: "Psalm 32:8" },
        "5-24": { verse: "The Lord is compassionate and gracious, slow to anger, abounding in love.", reference: "Psalm 103:8" },
        "5-25": { verse: "You are the light of the world. A town built on a hill cannot be hidden.", reference: "Matthew 5:14" },
        "5-26": { verse: "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil.", reference: "Jeremiah 29:11" },
        "5-27": { verse: "The Lord is with you wherever you go.", reference: "Joshua 1:9" },
        "5-28": { verse: "The Lord will fight for you; you need only to be still.", reference: "Exodus 14:14" },
        "5-29": { verse: "I can do all things through Christ who strengthens me.", reference: "Philippians 4:13" },
        "5-30": { verse: "The Lord is my shepherd; I shall not want.", reference: "Psalm 23:1" },
        "5-31": { verse: "In the beginning was the Word, and the Word was with God, and the Word was God.", reference: "John 1:1" },
    
        // June 1-30
        "6-1": { verse: "The Lord is my light and my salvation—whom shall I fear?", reference: "Psalm 27:1" },
        "6-2": { verse: "Trust in the Lord with all your heart and lean not on your own understanding.", reference: "Proverbs 3:5" },
        "6-3": { verse: "I can do all things through Christ who strengthens me.", reference: "Philippians 4:13" },
        "6-4": { verse: "The Lord will fight for you; you need only to be still.", reference: "Exodus 14:14" },
        "6-5": { verse: "For God so loved the world that he gave his one and only Son.", reference: "John 3:16" },
        "6-6": { verse: "For the Lord your God is with you wherever you go.", reference: "Joshua 1:9" },
        "6-7": { verse: "The Lord is gracious and righteous; our God is full of compassion.", reference: "Psalm 116:5" },
        "6-8": { verse: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.", reference: "Psalm 34:18" },
        "6-9": { verse: "The Lord is my shepherd; I shall not want.", reference: "Psalm 23:1" },
        "6-10": { verse: "Blessed are the poor in spirit, for theirs is the kingdom of heaven.", reference: "Matthew 5:3" },
        "6-11": { verse: "The Lord is my strength and my shield; my heart trusts in him, and he helps me.", reference: "Psalm 28:7" },
        "6-12": { verse: "The Lord will fight for you; you need only to be still.", reference: "Exodus 14:14" },
        "6-13": { verse: "For I know the plans I have for you, declares the Lord.", reference: "Jeremiah 29:11" },
        "6-14": { verse: "I will instruct you and teach you in the way you should go; I will counsel you with my loving eye on you.", reference: "Psalm 32:8" },
        "6-15": { verse: "The name of the Lord is a fortified tower; the righteous run to it and are safe.", reference: "Proverbs 18:10" },
        "6-16": { verse: "Cast all your anxiety on him because he cares for you.", reference: "1 Peter 5:7" },
        "6-17": { verse: "The Lord is righteous in all his ways and faithful in all he does.", reference: "Psalm 145:17" },
        "6-18": { verse: "I have loved you with an everlasting love.", reference: "Jeremiah 31:3" },
        "6-19": { verse: "The Lord is my light and my salvation—whom shall I fear?", reference: "Psalm 27:1" },
        "6-20": { verse: "The Lord is near to all who call on him, to all who call on him in truth.", reference: "Psalm 145:18" },
        "6-21": { verse: "The Lord is my refuge and my fortress, my God, in whom I trust.", reference: "Psalm 91:2" },
        "6-22": { verse: "I can do all things through Christ who strengthens me.", reference: "Philippians 4:13" },
        "6-23": { verse: "Be still, and know that I am God.", reference: "Psalm 46:10" },
        "6-24": { verse: "For the word of the Lord is right and true; he is faithful in all he does.", reference: "Psalm 33:4" },
        "6-25": { verse: "The Lord is compassionate and gracious, slow to anger, abounding in love.", reference: "Psalm 103:8" },
        "6-26": { verse: "I will bless the Lord at all times; his praise shall continually be in my mouth.", reference: "Psalm 34:1" },
        "6-27": { verse: "The Lord is my light and my salvation—whom shall I fear?", reference: "Psalm 27:1" },
        "6-28": { verse: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.", reference: "Psalm 34:18" },
        "6-29": { verse: "I can do all things through Christ who strengthens me.", reference: "Philippians 4:13" },
        "6-30": { verse: "The Lord will fight for you; you need only to be still.", reference: "Exodus 14:14" },
        "7-1": { verse: "The Lord is my light and my salvation—whom shall I fear?", reference: "Psalm 27:1" },
        "7-2": { verse: "Trust in the Lord with all your heart and lean not on your own understanding.", reference: "Proverbs 3:5" },
        "7-3": { verse: "I can do all things through Christ who strengthens me.", reference: "Philippians 4:13" },
        "7-4": { verse: "The Lord will fight for you; you need only to be still.", reference: "Exodus 14:14" },
        "7-5": { verse: "For God so loved the world that he gave his one and only Son.", reference: "John 3:16" },
        "7-6": { verse: "For the Lord your God is with you wherever you go.", reference: "Joshua 1:9" },
        "7-7": { verse: "The Lord is gracious and righteous; our God is full of compassion.", reference: "Psalm 116:5" },
        "7-8": { verse: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.", reference: "Psalm 34:18" },
        "7-9": { verse: "The Lord is my shepherd; I shall not want.", reference: "Psalm 23:1" },
        "7-10": { verse: "Blessed are the poor in spirit, for theirs is the kingdom of heaven.", reference: "Matthew 5:3" },
        "7-11": { verse: "The Lord is my strength and my shield; my heart trusts in him, and he helps me.", reference: "Psalm 28:7" },
        "7-12": { verse: "The Lord will fight for you; you need only to be still.", reference: "Exodus 14:14" },
        "7-13": { verse: "For I know the plans I have for you, declares the Lord.", reference: "Jeremiah 29:11" },
        "7-14": { verse: "I will instruct you and teach you in the way you should go; I will counsel you with my loving eye on you.", reference: "Psalm 32:8" },
        "7-15": { verse: "The name of the Lord is a fortified tower; the righteous run to it and are safe.", reference: "Proverbs 18:10" },
        "7-16": { verse: "Cast all your anxiety on him because he cares for you.", reference: "1 Peter 5:7" },
        "7-17": { verse: "The Lord is righteous in all his ways and faithful in all he does.", reference: "Psalm 145:17" },
        "7-18": { verse: "I have loved you with an everlasting love.", reference: "Jeremiah 31:3" },
        "7-19": { verse: "The Lord is my light and my salvation—whom shall I fear?", reference: "Psalm 27:1" },
        "7-20": { verse: "The Lord is near to all who call on him, to all who call on him in truth.", reference: "Psalm 145:18" },
        "7-21": { verse: "The Lord is my refuge and my fortress, my God, in whom I trust.", reference: "Psalm 91:2" },
        "7-22": { verse: "I can do all things through Christ who strengthens me.", reference: "Philippians 4:13" },
        "7-23": { verse: "Be still, and know that I am God.", reference: "Psalm 46:10" },
        "7-24": { verse: "For the word of the Lord is right and true; he is faithful in all he does.", reference: "Psalm 33:4" },
        "7-25": { verse: "The Lord is compassionate and gracious, slow to anger, abounding in love.", reference: "Psalm 103:8" },
        "7-26": { verse: "I will bless the Lord at all times; his praise shall continually be in my mouth.", reference: "Psalm 34:1" },
        "7-27": { verse: "The Lord is my light and my salvation—whom shall I fear?", reference: "Psalm 27:1" },
        "7-28": { verse: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.", reference: "Psalm 34:18" },
        "7-29": { verse: "I can do all things through Christ who strengthens me.", reference: "Philippians 4:13" },
        "7-30": { verse: "The Lord will fight for you; you need only to be still.", reference: "Exodus 14:14" },
        "7-31": { verse: "In the beginning was the Word, and the Word was with God, and the Word was God.", reference: "John 1:1" },
    
        // August 1-31
        "8-1": { verse: "The Lord is my light and my salvation—whom shall I fear?", reference: "Psalm 27:1" },
        "8-2": { verse: "Trust in the Lord with all your heart and lean not on your own understanding.", reference: "Proverbs 3:5" },
        "8-3": { verse: "I can do all things through Christ who strengthens me.", reference: "Philippians 4:13" },
        "8-4": { verse: "The Lord will fight for you; you need only to be still.", reference: "Exodus 14:14" },
        "8-5": { verse: "For God so loved the world that he gave his one and only Son.", reference: "John 3:16" },
        "8-6": { verse: "For the Lord your God is with you wherever you go.", reference: "Joshua 1:9" },
        "8-7": { verse: "The Lord is gracious and righteous; our God is full of compassion.", reference: "Psalm 116:5" },
        "8-8": { verse: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.", reference: "Psalm 34:18" },
        "8-9": { verse: "The Lord is my shepherd; I shall not want.", reference: "Psalm 23:1" },
        "8-10": { verse: "Blessed are the poor in spirit, for theirs is the kingdom of heaven.", reference: "Matthew 5:3" },
        "8-11": { verse: "The Lord is my strength and my shield; my heart trusts in him, and he helps me.", reference: "Psalm 28:7" },
        "8-12": { verse: "The Lord will fight for you; you need only to be still.", reference: "Exodus 14:14" },
        "8-13": { verse: "For I know the plans I have for you, declares the Lord.", reference: "Jeremiah 29:11" },
        "8-14": { verse: "I will instruct you and teach you in the way you should go; I will counsel you with my loving eye on you.", reference: "Psalm 32:8" },
        "8-15": { verse: "The name of the Lord is a fortified tower; the righteous run to it and are safe.", reference: "Proverbs 18:10" },
        "8-16": { verse: "Cast all your anxiety on him because he cares for you.", reference: "1 Peter 5:7" },
        "8-17": { verse: "The Lord is righteous in all his ways and faithful in all he does.", reference: "Psalm 145:17" },
        "8-18": { verse: "I have loved you with an everlasting love.", reference: "Jeremiah 31:3" },
        "8-19": { verse: "The Lord is my light and my salvation—whom shall I fear?", reference: "Psalm 27:1" },
        "8-20": { verse: "The Lord is near to all who call on him, to all who call on him in truth.", reference: "Psalm 145:18" },
        "8-21": { verse: "The Lord is my refuge and my fortress, my God, in whom I trust.", reference: "Psalm 91:2" },
        "8-22": { verse: "I can do all things through Christ who strengthens me.", reference: "Philippians 4:13" },
        "8-23": { verse: "Be still, and know that I am God.", reference: "Psalm 46:10" },
        "8-24": { verse: "For the word of the Lord is right and true; he is faithful in all he does.", reference: "Psalm 33:4" },
        "8-25": { verse: "The Lord is compassionate and gracious, slow to anger, abounding in love.", reference: "Psalm 103:8" },
        "8-26": { verse: "I will bless the Lord at all times; his praise shall continually be in my mouth.", reference: "Psalm 34:1" },
        "8-27": { verse: "The Lord is my light and my salvation—whom shall I fear?", reference: "Psalm 27:1" },
        "8-28": { verse: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.", reference: "Psalm 34:18" },
        "8-29": { verse: "I can do all things through Christ who strengthens me.", reference: "Philippians 4:13" },
        "8-30": { verse: "The Lord will fight for you; you need only to be still.", reference: "Exodus 14:14" },
        "8-31": { verse: "In the beginning was the Word, and the Word was with God, and the Word was God.", reference: "John 1:1" },
        "9-1": { verse: "The Lord is my light and my salvation—whom shall I fear?", reference: "Psalm 27:1" },
        "9-2": { verse: "Trust in the Lord with all your heart and lean not on your own understanding.", reference: "Proverbs 3:5" },
        "9-3": { verse: "I can do all things through Christ who strengthens me.", reference: "Philippians 4:13" },
        "9-4": { verse: "The Lord will fight for you; you need only to be still.", reference: "Exodus 14:14" },
        "9-5": { verse: "For God so loved the world that he gave his one and only Son.", reference: "John 3:16" },
        "9-6": { verse: "For the Lord your God is with you wherever you go.", reference: "Joshua 1:9" },
        "9-7": { verse: "The Lord is gracious and righteous; our God is full of compassion.", reference: "Psalm 116:5" },
        "9-8": { verse: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.", reference: "Psalm 34:18" },
        "9-9": { verse: "The Lord is my shepherd; I shall not want.", reference: "Psalm 23:1" },
        "9-10": { verse: "Blessed are the poor in spirit, for theirs is the kingdom of heaven.", reference: "Matthew 5:3" },
        "9-11": { verse: "The Lord is my strength and my shield; my heart trusts in him, and he helps me.", reference: "Psalm 28:7" },
        "9-12": { verse: "The Lord will fight for you; you need only to be still.", reference: "Exodus 14:14" },
        "9-13": { verse: "For I know the plans I have for you, declares the Lord.", reference: "Jeremiah 29:11" },
        "9-14": { verse: "I will instruct you and teach you in the way you should go; I will counsel you with my loving eye on you.", reference: "Psalm 32:8" },
        "9-15": { verse: "The name of the Lord is a fortified tower; the righteous run to it and are safe.", reference: "Proverbs 18:10" },
        "9-16": { verse: "Cast all your anxiety on him because he cares for you.", reference: "1 Peter 5:7" },
        "9-17": { verse: "The Lord is righteous in all his ways and faithful in all he does.", reference: "Psalm 145:17" },
        "9-18": { verse: "I have loved you with an everlasting love.", reference: "Jeremiah 31:3" },
        "9-19": { verse: "The Lord is my light and my salvation—whom shall I fear?", reference: "Psalm 27:1" },
        "9-20": { verse: "The Lord is near to all who call on him, to all who call on him in truth.", reference: "Psalm 145:18" },
        "9-21": { verse: "The Lord is my refuge and my fortress, my God, in whom I trust.", reference: "Psalm 91:2" },
        "9-22": { verse: "I can do all things through Christ who strengthens me.", reference: "Philippians 4:13" },
        "9-23": { verse: "Be still, and know that I am God.", reference: "Psalm 46:10" },
        "9-24": { verse: "For the word of the Lord is right and true; he is faithful in all he does.", reference: "Psalm 33:4" },
        "9-25": { verse: "The Lord is compassionate and gracious, slow to anger, abounding in love.", reference: "Psalm 103:8" },
        "9-26": { verse: "I will bless the Lord at all times; his praise shall continually be in my mouth.", reference: "Psalm 34:1" },
        "9-27": { verse: "The Lord is my light and my salvation—whom shall I fear?", reference: "Psalm 27:1" },
        "9-28": { verse: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.", reference: "Psalm 34:18" },
        "9-29": { verse: "I can do all things through Christ who strengthens me.", reference: "Philippians 4:13" },
        "9-30": { verse: "The Lord will fight for you; you need only to be still.", reference: "Exodus 14:14" },
    
        // October 1-31
        "10-1": { verse: "The Lord is my light and my salvation—whom shall I fear?", reference: "Psalm 27:1" },
        "10-2": { verse: "Trust in the Lord with all your heart and lean not on your own understanding.", reference: "Proverbs 3:5" },
        "10-3": { verse: "I can do all things through Christ who strengthens me.", reference: "Philippians 4:13" },
        "10-4": { verse: "The Lord will fight for you; you need only to be still.", reference: "Exodus 14:14" },
        "10-5": { verse: "For God so loved the world that he gave his one and only Son.", reference: "John 3:16" },
        "10-6": { verse: "For the Lord your God is with you wherever you go.", reference: "Joshua 1:9" },
        "10-7": { verse: "The Lord is gracious and righteous; our God is full of compassion.", reference: "Psalm 116:5" },
        "10-8": { verse: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.", reference: "Psalm 34:18" },
        "10-9": { verse: "The Lord is my shepherd; I shall not want.", reference: "Psalm 23:1" },
        "10-10": { verse: "Blessed are the poor in spirit, for theirs is the kingdom of heaven.", reference: "Matthew 5:3" },
        "10-11": { verse: "The Lord is my strength and my shield; my heart trusts in him, and he helps me.", reference: "Psalm 28:7" },
        "10-12": { verse: "The Lord will fight for you; you need only to be still.", reference: "Exodus 14:14" },
        "10-13": { verse: "For I know the plans I have for you, declares the Lord.", reference: "Jeremiah 29:11" },
        "10-14": { verse: "I will instruct you and teach you in the way you should go; I will counsel you with my loving eye on you.", reference: "Psalm 32:8" },
        "10-15": { verse: "The name of the Lord is a fortified tower; the righteous run to it and are safe.", reference: "Proverbs 18:10" },
        "10-16": { verse: "Cast all your anxiety on him because he cares for you.", reference: "1 Peter 5:7" },
        "10-17": { verse: "The Lord is righteous in all his ways and faithful in all he does.", reference: "Psalm 145:17" },
        "10-18": { verse: "I have loved you with an everlasting love.", reference: "Jeremiah 31:3" },
        "10-19": { verse: "The Lord is my light and my salvation—whom shall I fear?", reference: "Psalm 27:1" },
        "10-20": { verse: "The Lord is near to all who call on him, to all who call on him in truth.", reference: "Psalm 145:18" },
        "10-21": { verse: "The Lord is my refuge and my fortress, my God, in whom I trust.", reference: "Psalm 91:2" },
        "10-22": { verse: "I can do all things through Christ who strengthens me.", reference: "Philippians 4:13" },
        "10-23": { verse: "Be still, and know that I am God.", reference: "Psalm 46:10" },
        "10-24": { verse: "For the word of the Lord is right and true; he is faithful in all he does.", reference: "Psalm 33:4" },
        "10-25": { verse: "The Lord is compassionate and gracious, slow to anger, abounding in love.", reference: "Psalm 103:8" },
        "10-26": { verse: "I will bless the Lord at all times; his praise shall continually be in my mouth.", reference: "Psalm 34:1" },
        "10-27": { verse: "The Lord is my light and my salvation—whom shall I fear?", reference: "Psalm 27:1" },
        "10-28": { verse: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.", reference: "Psalm 34:18" },
        "10-29": { verse: "I can do all things through Christ who strengthens me.", reference: "Philippians 4:13" },
        "10-30": { verse: "The Lord will fight for you; you need only to be still.", reference: "Exodus 14:14" },
        "10-31": { verse: "In the beginning was the Word, and the Word was with God, and the Word was God.", reference: "John 1:1" },
            // November 1-30
    "11-1": { verse: "The Lord is my shepherd; I lack nothing.", reference: "Psalm 23:1" },
    "11-2": { verse: "He gives strength to the weary and increases the power of the weak.", reference: "Isaiah 40:29" },
    "11-3": { verse: "I will not leave you as orphans; I will come to you.", reference: "John 14:18" },
    "11-4": { verse: "You are the light of the world. A town built on a hill cannot be hidden.", reference: "Matthew 5:14" },
    "11-5": { verse: "For God did not give us a spirit of timidity, but a spirit of power, of love and of self-discipline.", reference: "2 Timothy 1:7" },
    "11-6": { verse: "Be strong and courageous. Do not be afraid; do not be discouraged.", reference: "Joshua 1:9" },
    "11-7": { verse: "The Lord will bless you and keep you; the Lord will make his face shine upon you and be gracious to you.", reference: "Numbers 6:24-25" },
    "11-8": { verse: "And we know that in all things God works for the good of those who love him.", reference: "Romans 8:28" },
    "11-9": { verse: "The Lord is my light and my salvation; whom shall I fear?", reference: "Psalm 27:1" },
    "11-10": { verse: "I have come that they may have life, and have it to the full.", reference: "John 10:10" },
    "11-11": { verse: "The Lord is my strength and my shield; my heart trusts in him, and he helps me.", reference: "Psalm 28:7" },
    "11-12": { verse: "The Lord is near to all who call on him, to all who call on him in truth.", reference: "Psalm 145:18" },
    "11-13": { verse: "The Lord is compassionate and gracious, slow to anger, abounding in love.", reference: "Psalm 103:8" },
    "11-14": { verse: "He who began a good work in you will carry it on to completion until the day of Christ Jesus.", reference: "Philippians 1:6" },
    "11-15": { verse: "And my God will meet all your needs according to the riches of his glory in Christ Jesus.", reference: "Philippians 4:19" },
    "11-16": { verse: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.", reference: "Philippians 4:6" },
    "11-17": { verse: "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.", reference: "Jeremiah 29:11" },
    "11-18": { verse: "Let all that you do be done in love.", reference: "1 Corinthians 16:14" },
    "11-19": { verse: "The joy of the Lord is your strength.", reference: "Nehemiah 8:10" },
    "11-20": { verse: "For where your treasure is, there your heart will be also.", reference: "Matthew 6:21" },
    "11-21": { verse: "I can do all things through Christ who strengthens me.", reference: "Philippians 4:13" },
    "11-22": { verse: "Be still, and know that I am God.", reference: "Psalm 46:10" },
    "11-23": { verse: "The name of the Lord is a strong tower; the righteous run to it and are safe.", reference: "Proverbs 18:10" },
    "11-24": { verse: "The Lord is good to those whose hope is in him, to the one who seeks him.", reference: "Lamentations 3:25" },
    "11-25": { verse: "The Lord is my refuge and my fortress, my God, in whom I trust.", reference: "Psalm 91:2" },
    "11-26": { verse: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.", reference: "Psalm 34:18" },
    "11-27": { verse: "The Lord is my light and my salvation—whom shall I fear?", reference: "Psalm 27:1" },
    "11-28": { verse: "For the Lord is righteous, he loves justice; the upright will see his face.", reference: "Psalm 11:7" },
    "11-29": { verse: "I will bless the Lord at all times; his praise shall continually be in my mouth.", reference: "Psalm 34:1" },
    "11-30": { verse: "The Lord is good to those who hope is in him, to the one who seeks him.", reference: "Lamentations 3:25" },

    // December 1-31
    "12-1": { verse: "In the beginning was the Word, and the Word was with God, and the Word was God.", reference: "John 1:1" },
    "12-2": { verse: "The Word became flesh and made his dwelling among us.", reference: "John 1:14" },
    "12-3": { verse: "For God so loved the world that he gave his one and only Son.", reference: "John 3:16" },
    "12-4": { verse: "I am the way and the truth and the life.", reference: "John 14:6" },
    "12-5": { verse: "Peace I leave with you; my peace I give you.", reference: "John 14:27" },
    "12-6": { verse: "You will seek me and find me when you seek me with all your heart.", reference: "Jeremiah 29:13" },
    "12-7": { verse: "The Lord is my shepherd; I lack nothing.", reference: "Psalm 23:1" },
    "12-8": { verse: "He gives strength to the weary and increases the power of the weak.", reference: "Isaiah 40:29" },
    "12-9": { verse: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.", reference: "Psalm 34:18" },
    "12-10": { verse: "For God so loved the world that he gave his one and only Son.", reference: "John 3:16" },
    "12-11": { verse: "Trust in the Lord with all your heart and lean not on your own understanding.", reference: "Proverbs 3:5" },
    "12-12": { verse: "I can do all things through Christ who strengthens me.", reference: "Philippians 4:13" },
    "12-13": { verse: "The joy of the Lord is your strength.", reference: "Nehemiah 8:10" },
    "12-14": { verse: "The Lord will fight for you; you need only to be still.", reference: "Exodus 14:14" },
    "12-15": { verse: "The Lord is my strength and my shield; my heart trusts in him, and he helps me.", reference: "Psalm 28:7" },
    "12-16": { verse: "The Lord is my light and my salvation; whom shall I fear?", reference: "Psalm 27:1" },
    "12-17": { verse: "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.", reference: "Jeremiah 29:11" },
    "12-18": { verse: "Let all that you do be done in love.", reference: "1 Corinthians 16:14" },
    "12-19": { verse: "For where your treasure is, there your heart will be also.", reference: "Matthew 6:21" },
    "12-20": { verse: "I will instruct you and teach you in the way you should go; I will counsel you with my loving eye on you.", reference: "Psalm 32:8" },
    "12-21": { verse: "The Lord is gracious and righteous; our God is full of compassion.", reference: "Psalm 116:5" },
    "12-22": { verse: "The name of the Lord is a fortified tower; the righteous run to it and are safe.", reference: "Proverbs 18:10" },
    "12-23": { verse: "Peace I leave with you; my peace I give you.", reference: "John 14:27" },
    "12-24": { verse: "For unto us a child is born, to us a son is given.", reference: "Isaiah 9:6" },
    "12-25": { verse: "Glory to God in the highest, and on earth peace to men on whom his favor rests.", reference: "Luke 2:14" },
    "12-26": { verse: "I am the Alpha and the Omega, the First and the Last, the Beginning and the End.", reference: "Revelation 22:13" },
    "12-27": { verse: "For God has not given us a spirit of fear, but of power and of love and of a sound mind.", reference: "2 Timothy 1:7" },
    "12-28": { verse: "I can do all things through Christ who strengthens me.", reference: "Philippians 4:13" },
    "12-29": { verse: "For the Lord is good and his love endures forever; his faithfulness continues through all generations.", reference: "Psalm 100:5" },
    "12-30": { verse: "The Lord is near to all who call on him, to all who call on him in truth.", reference: "Psalm 145:18" },
    "12-31": { verse: "The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you.", reference: "Numbers 6:24-25" }
        
        
};

// Daily affirmations object
const dailyAffirmations = {
    "1-1": { affirmation: "You are capable of amazing things." },
    "1-2": { affirmation: "Every day, in every way, you are getting better and better." },
    "1-3": { affirmation: "Believe in yourself and all that you are." },
    "1-4": { affirmation: "You are strong, resilient, and capable." },
    "1-5": { affirmation: "Your potential is limitless." },
    "1-6": { affirmation: "You are worthy of all the good things life has to offer." },
    "1-7": { affirmation: "You can overcome any challenge." },
    "1-8": { affirmation: "Your mind is powerful and positive." },
    "1-9": { affirmation: "You are at peace with who you are." },
    "1-10": { affirmation: "Today is going to be a great day." },
    "1-11": { affirmation: "You radiate confidence and self-respect." },
    "1-12": { affirmation: "You are grateful for all you have." },
    "1-13": { affirmation: "Your hard work will pay off." },
    "1-14": { affirmation: "You are becoming the best version of yourself." },
    "1-15": { affirmation: "You are enough, just as you are." },
    "1-16": { affirmation: "You are surrounded by love and support." },
    "1-17": { affirmation: "You attract success and happiness." },
    "1-18": { affirmation: "You are strong in mind, body, and spirit." },
    "1-19": { affirmation: "You are free to create the life you desire." },
    "1-20": { affirmation: "You deserve to be happy and successful." },
    "1-21": { affirmation: "You are in control of your own happiness." },
    "1-22": { affirmation: "You forgive yourself and others." },
    "1-23": { affirmation: "You are a unique and special person." },
    "1-24": { affirmation: "Every moment is a fresh beginning." },
    "1-25": { affirmation: "You are capable of reaching your goals." },
    "1-26": { affirmation: "Your possibilities are endless." },
    "1-27": { affirmation: "You are calm, patient, and in control." },
    "1-28": { affirmation: "You choose to see the good in people." },
    "1-29": { affirmation: "You are proud of how far you’ve come." },
    "1-30": { affirmation: "You trust yourself to make good decisions." },
    "1-31": { affirmation: "You believe in your abilities and strengths." },

    "2-1": { affirmation: "You are grateful for another day to make a difference." },
    "2-2": { affirmation: "You deserve love and respect." },
    "2-3": { affirmation: "You are a positive thinker and only attract positivity." },
    "2-4": { affirmation: "You are open to new and wonderful opportunities." },
    "2-5": { affirmation: "You choose happiness over fear." },
    "2-6": { affirmation: "You are confident in your abilities." },
    "2-7": { affirmation: "You are growing, evolving, and becoming your best self." },
    "2-8": { affirmation: "You are worthy of achieving your dreams." },
    "2-9": { affirmation: "You release all negative thoughts and embrace positivity." },
    "2-10": { affirmation: "You have the power to change your story." },
    "2-11": { affirmation: "You embrace challenges as opportunities to grow." },
    "2-12": { affirmation: "You are proud of all your accomplishments." },
    "2-13": { affirmation: "You are at peace with what is and optimistic for what will be." },
    "2-14": { affirmation: "You are worthy of love and kindness." },
    "2-15": { affirmation: "You have the courage to start and succeed." },
    "2-16": { affirmation: "You are grateful for your unique talents and gifts." },
    "2-17": { affirmation: "You accept yourself unconditionally." },
    "2-18": { affirmation: "You focus on what you can control." },
    "2-19": { affirmation: "You are unstoppable in achieving your dreams." },
    "2-20": { affirmation: "You have the strength to overcome any obstacle." },
    "2-21": { affirmation: "You welcome abundance into your life." },
    "2-22": { affirmation: "You trust the timing of your life." },
    "2-23": { affirmation: "You are thankful for all the love in your life." },
    "2-24": { affirmation: "You are open to new adventures and experiences." },
    "2-25": { affirmation: "You deserve success and all its rewards." },
    "2-26": { affirmation: "You are grateful for the good that is coming to you." },
    "2-27": { affirmation: "You trust in the process of life." },
    "2-28": { affirmation: "You are resilient, strong, and brave." },
    "2-29": { affirmation: "You are grateful for this unique and special day." },
    // March
    "3-1": { affirmation: "You are becoming more at ease with every breath." },
    "3-2": { affirmation: "You have everything you need to succeed." },
    "3-3": { affirmation: "You are in charge of your life and your happiness." },
    "3-4": { affirmation: "You believe in the person you are becoming." },
    "3-5": { affirmation: "You are surrounded by positive energy." },
    "3-6": { affirmation: "You are grateful for your healthy mind and body." },
    "3-7": { affirmation: "You trust yourself to handle whatever comes." },
    "3-8": { affirmation: "You are exactly where you need to be right now." },
    "3-9": { affirmation: "You are becoming more relaxed and centered each day." },
    "3-10": { affirmation: "You are focused, persistent, and will never quit." },
    "3-11": { affirmation: "You deserve all the good things life has to offer." },
    "3-12": { affirmation: "You are worthy of respect from yourself and others." },
    "3-13": { affirmation: "You approach every situation with confidence and ease." },
    "3-14": { affirmation: "You are grateful for the present moment." },
    "3-15": { affirmation: "You are creating a life you love." },
    "3-16": { affirmation: "You are thankful for all the lessons in life." },
    "3-17": { affirmation: "You are becoming more of who you are meant to be." },
    "3-18": { affirmation: "You are healthy, strong, and powerful." },
    "3-19": { affirmation: "You radiate positivity and attract positivity in return." },
    "3-20": { affirmation: "You let go of fear and embrace courage." },
    "3-21": { affirmation: "You are open to love and kindness today." },
    "3-22": { affirmation: "You are the creator of your own happiness." },
    "3-23": { affirmation: "You are free from worry and regret." },
    "3-24": { affirmation: "You are open and willing to attract all you deserve." },
    "3-25": { affirmation: "You are enough just as you are." },
    "3-26": { affirmation: "You embrace change as it comes." },
    "3-27": { affirmation: "You are grateful for the ability to grow and improve." },
    "3-28": { affirmation: "You radiate self-confidence and inner harmony." },
    "3-29": { affirmation: "You deserve to be healthy and feel good." },
    "3-30": { affirmation: "You are resilient, resourceful, and determined." },
    "3-31": { affirmation: "You are in the process of becoming the best version of yourself." },

    // April
    "4-1": { affirmation: "You approach each day with gratitude and optimism." },
    "4-2": { affirmation: "You have the power to make positive changes." },
    "4-3": { affirmation: "You attract joy and abundance into your life." },
    "4-4": { affirmation: "You are grateful for all you have and all you will receive." },
    "4-5": { affirmation: "You welcome new opportunities with open arms." },
    "4-6": { affirmation: "You are worthy of success and happiness." },
    "4-7": { affirmation: "You focus on what brings you joy and fulfillment." },
    "4-8": { affirmation: "You embrace all of life’s experiences with an open heart." },
    "4-9": { affirmation: "You are courageous, bold, and confident." },
    "4-10": { affirmation: "You choose to see the good in yourself and others." },
    "4-11": { affirmation: "You are at peace with where you are and excited about where you're going." },
    "4-12": { affirmation: "You are worthy of all that is good and beautiful." },
    "4-13": { affirmation: "You are grateful for all you have and all that is yet to come." },
    "4-14": { affirmation: "You are brave, bold, and beautiful." },
    "4-15": { affirmation: "You choose to fill your life with positivity." },
    "4-16": { affirmation: "You welcome abundance into all areas of your life." },
    "4-17": { affirmation: "You are open to receiving all the good things in life." },
    "4-18": { affirmation: "You release all doubt and replace it with faith." },
    "4-19": { affirmation: "You trust that everything in life is unfolding as it should." },
    "4-20": { affirmation: "You allow yourself to be who you truly are." },
    "4-21": { affirmation: "You deserve to live a life filled with happiness and passion." },
    "4-22": { affirmation: "You are grateful for this moment and find joy in it." },
    "4-23": { affirmation: "You let go of any fears and embrace peace." },
    "4-24": { affirmation: "You are surrounded by positive, loving people." },
    "4-25": { affirmation: "You believe deeply in your dreams and goals." },
    "4-26": { affirmation: "You radiate peace, love, and kindness." },
    "4-27": { affirmation: "You are confident, focused, and determined." },
    "4-28": { affirmation: "You are grateful for another day to shine." },
    "4-29": { affirmation: "You are grateful for the journey and all it brings." },
    "4-30": { affirmation: "You are aligned with the energy of abundance." },
        // May
    "5-1": { affirmation: "You are surrounded by love and everything is fine." },
    "5-2": { affirmation: "You are learning and growing every single day." },
    "5-3": { affirmation: "You are worthy of all the amazing things life has to offer." },
    "5-4": { affirmation: "You forgive yourself and others." },
    "5-5": { affirmation: "You are resilient and can handle any challenge." },
    "5-6": { affirmation: "You are grateful for your journey and its lessons." },
    "5-7": { affirmation: "You are open to new and wonderful changes." },
    "5-8": { affirmation: "You are worthy of the compliments you receive." },
    "5-9": { affirmation: "You are worthy of all the compliments you receive." },
    "5-10": { affirmation: "You approach life with an open mind and a caring heart." },
    "5-11": { affirmation: "You are in charge of how you feel today." },
    "5-12": { affirmation: "You trust that everything in your life is unfolding perfectly." },
    "5-13": { affirmation: "You attract only good things into your life." },
    "5-14": { affirmation: "You are proud of the progress you’ve made." },
    "5-15": { affirmation: "You welcome joy into every part of your life." },
    "5-16": { affirmation: "You are becoming closer to your true self every day." },
    "5-17": { affirmation: "You are worthy of good things and deserve happiness." },
    "5-18": { affirmation: "You radiate love, peace, and kindness." },
    "5-19": { affirmation: "You are patient, gentle, and kind with yourself." },
    "5-20": { affirmation: "You are capable of achieving your dreams." },
    "5-21": { affirmation: "You are becoming the best version of yourself." },
    "5-22": { affirmation: "You are worthy of deep connections and lasting friendships." },
    "5-23": { affirmation: "You find joy in the little things in life." },
    "5-24": { affirmation: "You are brave, bold, and courageous." },
    "5-25": { affirmation: "You are worthy of respect and acceptance." },
    "5-26": { affirmation: "You radiate positive energy and attract positivity in return." },
    "5-27": { affirmation: "You choose peace over worry every day." },
    "5-28": { affirmation: "You are becoming more confident every day." },
    "5-29": { affirmation: "You are open to new adventures in life." },
    "5-30": { affirmation: "You deserve all the wonderful things life has to offer." },
    "5-31": { affirmation: "You are grateful for the endless opportunities life offers." },

    // June
    "6-1": { affirmation: "You attract success and abundance." },
    "6-2": { affirmation: "You are at peace with who you are." },
    "6-3": { affirmation: "You trust in your ability to overcome obstacles." },
    "6-4": { affirmation: "You are proud of how far you’ve come." },
    "6-5": { affirmation: "You have the courage to change your life." },
    "6-6": { affirmation: "You are open to receiving unexpected blessings." },
    "6-7": { affirmation: "You trust that you are on the right path." },
    "6-8": { affirmation: "You embrace your strengths and grow from your weaknesses." },
    "6-9": { affirmation: "You are free to create the life you desire." },
    "6-10": { affirmation: "You are learning to trust the journey." },
    "6-11": { affirmation: "You are exactly where you need to be." },
    "6-12": { affirmation: "You are committed to achieving your goals." },
    "6-13": { affirmation: "You accept and embrace all experiences, even unpleasant ones." },
    "6-14": { affirmation: "You are grateful for every opportunity to learn and grow." },
    "6-15": { affirmation: "You are at peace with your past, present, and future." },
    "6-16": { affirmation: "You forgive yourself for past mistakes." },
    "6-17": { affirmation: "You have everything you need within you." },
    "6-18": { affirmation: "You choose to release all negativity." },
    "6-19": { affirmation: "You are becoming a better version of yourself each day." },
    "6-20": { affirmation: "You are attracting only good things into your life." },
    "6-21": { affirmation: "You choose to be happy and grateful today." },
    "6-22": { affirmation: "You trust that you are capable of achieving your dreams." },
    "6-23": { affirmation: "You let go of what no longer serves you." },
    "6-24": { affirmation: "You are worthy of love and affection." },
    "6-25": { affirmation: "You are grateful for the love and support in your life." },
    "6-26": { affirmation: "You are resilient, strong, and brave." },
    "6-27": { affirmation: "You are constantly growing and evolving." },
    "6-28": { affirmation: "You attract good things into your life." },
    "6-29": { affirmation: "You are becoming more at peace every day." },
    "6-30": { affirmation: "You are open to positive changes in all areas of your life." },
    // May
    "5-1": { affirmation: "You are surrounded by love and everything is fine." },
    "5-2": { affirmation: "You are learning and growing every single day." },
    "5-3": { affirmation: "You are worthy of all the amazing things life has to offer." },
    "5-4": { affirmation: "You forgive yourself and others." },
    "5-5": { affirmation: "You are resilient and can handle any challenge." },
    "5-6": { affirmation: "You are grateful for your journey and its lessons." },
    "5-7": { affirmation: "You are open to new and wonderful changes." },
    "5-8": { affirmation: "You are worthy of the compliments you receive." },
    "5-9": { affirmation: "You are worthy of all the compliments you receive." },
    "5-10": { affirmation: "You approach life with an open mind and a caring heart." },
    "5-11": { affirmation: "You are in charge of how you feel today." },
    "5-12": { affirmation: "You trust that everything in your life is unfolding perfectly." },
    "5-13": { affirmation: "You attract only good things into your life." },
    "5-14": { affirmation: "You are proud of the progress you’ve made." },
    "5-15": { affirmation: "You welcome joy into every part of your life." },
    "5-16": { affirmation: "You are becoming closer to your true self every day." },
    "5-17": { affirmation: "You are worthy of good things and deserve happiness." },
    "5-18": { affirmation: "You radiate love, peace, and kindness." },
    "5-19": { affirmation: "You are patient, gentle, and kind with yourself." },
    "5-20": { affirmation: "You are capable of achieving your dreams." },
    "5-21": { affirmation: "You are becoming the best version of yourself." },
    "5-22": { affirmation: "You are worthy of deep connections and lasting friendships." },
    "5-23": { affirmation: "You find joy in the little things in life." },
    "5-24": { affirmation: "You are brave, bold, and courageous." },
    "5-25": { affirmation: "You are worthy of respect and acceptance." },
    "5-26": { affirmation: "You radiate positive energy and attract positivity in return." },
    "5-27": { affirmation: "You choose peace over worry every day." },
    "5-28": { affirmation: "You are becoming more confident every day." },
    "5-29": { affirmation: "You are open to new adventures in life." },
    "5-30": { affirmation: "You deserve all the wonderful things life has to offer." },
    "5-31": { affirmation: "You are grateful for the endless opportunities life offers." },

    // June
    "6-1": { affirmation: "You attract success and abundance." },
    "6-2": { affirmation: "You are at peace with who you are." },
    "6-3": { affirmation: "You trust in your ability to overcome obstacles." },
    "6-4": { affirmation: "You are proud of how far you’ve come." },
    "6-5": { affirmation: "You have the courage to change your life." },
    "6-6": { affirmation: "You are open to receiving unexpected blessings." },
    "6-7": { affirmation: "You trust that you are on the right path." },
    "6-8": { affirmation: "You embrace your strengths and grow from your weaknesses." },
    "6-9": { affirmation: "You are free to create the life you desire." },
    "6-10": { affirmation: "You are learning to trust the journey." },
    "6-11": { affirmation: "You are exactly where you need to be." },
    "6-12": { affirmation: "You are committed to achieving your goals." },
    "6-13": { affirmation: "You accept and embrace all experiences, even unpleasant ones." },
    "6-14": { affirmation: "You are grateful for every opportunity to learn and grow." },
    "6-15": { affirmation: "You are at peace with your past, present, and future." },
    "6-16": { affirmation: "You forgive yourself for past mistakes." },
    "6-17": { affirmation: "You have everything you need within you." },
    "6-18": { affirmation: "You choose to release all negativity." },
    "6-19": { affirmation: "You are becoming a better version of yourself each day." },
    "6-20": { affirmation: "You are attracting only good things into your life." },
    "6-21": { affirmation: "You choose to be happy and grateful today." },
    "6-22": { affirmation: "You trust that you are capable of achieving your dreams." },
    "6-23": { affirmation: "You let go of what no longer serves you." },
    "6-24": { affirmation: "You are worthy of love and affection." },
    "6-25": { affirmation: "You are grateful for the love and support in your life." },
    "6-26": { affirmation: "You are resilient, strong, and brave." },
    "6-27": { affirmation: "You are constantly growing and evolving." },
    "6-28": { affirmation: "You attract good things into your life." },
    "6-29": { affirmation: "You are becoming more at peace every day." },
    "6-30": { affirmation: "You are open to positive changes in all areas of your life." },
    // July
    "7-1": { affirmation: "You are filled with gratitude for all that you have." },
    "7-2": { affirmation: "You are worthy of the good things that happen to you." },
    "7-3": { affirmation: "You radiate confidence and positivity." },
    "7-4": { affirmation: "You believe in your ability to overcome challenges." },
    "7-5": { affirmation: "You are grateful for another day to make a difference." },
    "7-6": { affirmation: "You are a magnet for abundance and positive energy." },
    "7-7": { affirmation: "You are constantly attracting new opportunities for success." },
    "7-8": { affirmation: "You are grateful for the beauty that surrounds you." },
    "7-9": { affirmation: "You are becoming more comfortable in your own skin." },
    "7-10": { affirmation: "You are focused, persistent, and will never quit." },
    "7-11": { affirmation: "You are at peace with what has been, and what will be." },
    "7-12": { affirmation: "You allow yourself to be proud of your accomplishments." },
    "7-13": { affirmation: "You choose to live a happy and healthy life." },
    "7-14": { affirmation: "You are open to the miracles the universe has for you." },
    "7-15": { affirmation: "You release doubt and welcome faith." },
    "7-16": { affirmation: "You choose to see the good in people and situations." },
    "7-17": { affirmation: "You are deserving of love, joy, and respect." },
    "7-18": { affirmation: "You trust that everything works out for your highest good." },
    "7-19": { affirmation: "You are capable of amazing things." },
    "7-20": { affirmation: "You choose peace over anger and forgiveness over resentment." },
    "7-21": { affirmation: "You are resilient in the face of any setback." },
    "7-22": { affirmation: "You are proud of the person you are becoming." },
    "7-23": { affirmation: "You welcome new and exciting possibilities." },
    "7-24": { affirmation: "You deserve success, happiness, and fulfillment." },
    "7-25": { affirmation: "You are grateful for today and the limitless possibilities it brings." },
    "7-26": { affirmation: "You are a unique and valuable individual." },
    "7-27": { affirmation: "You are kind to yourself and others." },
    "7-28": { affirmation: "You welcome all the new opportunities that today brings." },
    "7-29": { affirmation: "You trust in your journey and embrace each moment." },
    "7-30": { affirmation: "You are a positive force in the world." },
    "7-31": { affirmation: "You are grateful for who you are and who you are becoming." },

    // August
    "8-1": { affirmation: "You are in harmony with yourself and the world around you." },
    "8-2": { affirmation: "You are capable of achieving greatness." },
    "8-3": { affirmation: "You are worthy of the love and respect you give to others." },
    "8-4": { affirmation: "You believe in yourself and your abilities." },
    "8-5": { affirmation: "You are patient with yourself and trust your growth." },
    "8-6": { affirmation: "You are worthy of happiness and peace." },
    "8-7": { affirmation: "You are attracting the right people into your life." },
    "8-8": { affirmation: "You choose love and compassion over judgment." },
    "8-9": { affirmation: "You are proud of all your accomplishments." },
    "8-10": { affirmation: "You are aligned with the energy of abundance." },
    "8-11": { affirmation: "You are calm, patient, and in control of your emotions." },
    "8-12": { affirmation: "You are free from worry and regret." },
    "8-13": { affirmation: "You radiate confidence, self-respect, and inner harmony." },
    "8-14": { affirmation: "You are filled with positive energy and inspired to take action." },
    "8-15": { affirmation: "You deserve all the compliments you receive." },
    "8-16": { affirmation: "You trust that life is bringing you exactly what you need." },
    "8-17": { affirmation: "You are grateful for your health, peace, and happiness." },
    "8-18": { affirmation: "You believe in the person you are becoming." },
    "8-19": { affirmation: "You are surrounded by positivity, inspiration, and creativity." },
    "8-20": { affirmation: "You are grateful for the support and love around you." },
    "8-21": { affirmation: "You are open to love, joy, and abundance." },
    "8-22": { affirmation: "You are in control of your thoughts and emotions." },
    "8-23": { affirmation: "You trust in your ability to create the life you deserve." },
    "8-24": { affirmation: "You have an abundant source of creativity within you." },
    "8-25": { affirmation: "You are grateful for the abundance and success in your life." },
    "8-26": { affirmation: "You are confident in the person you are becoming." },
    "8-27": { affirmation: "You attract abundance in all areas of your life." },
    "8-28": { affirmation: "You are open to receiving all the wealth life offers you." },
    "8-29": { affirmation: "You choose to rise above negative feelings and let joy in." },
    "8-30": { affirmation: "You are creating the life of your dreams with each choice you make." },
    "8-31": { affirmation: "You believe in the person you are becoming." },
    // September
    "9-1": { affirmation: "You are courageous and stand up for yourself." },
    "9-2": { affirmation: "You are free of worry and regret, and focus on the present." },
    "9-3": { affirmation: "You trust in your ability to solve any challenge that comes your way." },
    "9-4": { affirmation: "You are open to receiving unexpected blessings." },
    "9-5": { affirmation: "You choose to be happy right now. You love your life." },
    "9-6": { affirmation: "You trust that the universe is guiding you toward your purpose." },
    "9-7": { affirmation: "You are worthy of love and respect." },
    "9-8": { affirmation: "You deserve a peaceful and loving life." },
    "9-9": { affirmation: "You are resilient, strong, and brave." },
    "9-10": { affirmation: "You have the power to create change." },
    "9-11": { affirmation: "You are enough just as you are." },
    "9-12": { affirmation: "You choose to rise above negative thoughts and let joy in." },
    "9-13": { affirmation: "You are grounded, peaceful, and centered." },
    "9-14": { affirmation: "You attract wonderful opportunities into your life." },
    "9-15": { affirmation: "You are grateful for all that you have." },
    "9-16": { affirmation: "You are focused and determined to achieve your goals." },
    "9-17": { affirmation: "You are a positive thinker and only attract positivity in your life." },
    "9-18": { affirmation: "You are proud of all that you have accomplished." },
    "9-19": { affirmation: "You are a magnet for success and good fortune." },
    "9-20": { affirmation: "You attract positive and loving relationships into your life." },
    "9-21": { affirmation: "You are thankful for today and all it will bring." },
    "9-22": { affirmation: "You are brave enough to embrace growth." },
    "9-23": { affirmation: "You have the courage to be who you truly are." },
    "9-24": { affirmation: "You allow yourself to shine and be all that you can be." },
    "9-25": { affirmation: "You choose to be kind to yourself and others today." },
    "9-26": { affirmation: "You trust the process of life." },
    "9-27": { affirmation: "You attract positivity, abundance, and joy." },
    "9-28": { affirmation: "You are open to new adventures in life." },
    "9-29": { affirmation: "You are proud of who you are becoming." },
    "9-30": { affirmation: "You are exactly where you need to be." },

    // October
    "10-1": { affirmation: "You radiate love, peace, and kindness." },
    "10-2": { affirmation: "You are grateful for the lessons of the past." },
    "10-3": { affirmation: "You are creating a beautiful life for yourself." },
    "10-4": { affirmation: "You believe in your dreams and your ability to achieve them." },
    "10-5": { affirmation: "You are in control of your thoughts, actions, and emotions." },
    "10-6": { affirmation: "You are capable of achieving everything you set your mind to." },
    "10-7": { affirmation: "You trust that everything in your life is unfolding perfectly." },
    "10-8": { affirmation: "You embrace each challenge as a new opportunity for growth." },
    "10-9": { affirmation: "You choose happiness and positivity over negativity." },
    "10-10": { affirmation: "You are grateful for the peace and serenity in your life." },
    "10-11": { affirmation: "You are a unique and wonderful person, with much to offer." },
    "10-12": { affirmation: "You are worthy of all the compliments you receive." },
    "10-13": { affirmation: "You allow yourself to accept and express your true feelings." },
    "10-14": { affirmation: "You deserve happiness, health, and joy." },
    "10-15": { affirmation: "You have the power to create a positive change." },
    "10-16": { affirmation: "You trust yourself and your decisions." },
    "10-17": { affirmation: "You are constantly growing and evolving into a better person." },
    "10-18": { affirmation: "You are a loving, caring person." },
    "10-19": { affirmation: "You let go of worry and invite peace and calm into your mind." },
    "10-20": { affirmation: "You are grateful for this beautiful moment." },
    "10-21": { affirmation: "You radiate positivity and attract positive outcomes." },
    "10-22": { affirmation: "You are a beacon of love and compassion." },
    "10-23": { affirmation: "You are confident in your ability to handle any situation." },
    "10-24": { affirmation: "You are thankful for the love and support in your life." },
    "10-25": { affirmation: "You are open to change and ready to embrace it." },
    "10-26": { affirmation: "You have an inner peace that cannot be disturbed." },
    "10-27": { affirmation: "You attract only good things into your life." },
    "10-28": { affirmation: "You are worthy of a peaceful and loving life." },
    "10-29": { affirmation: "You choose to find happiness in the little things." },
    "10-30": { affirmation: "You trust that the universe is guiding you to where you need to be." },
    "10-31": { affirmation: "You are ready to make today amazing." },
    // November
    "11-1": { affirmation: "You are worthy of achieving your dreams and goals." },
    "11-2": { affirmation: "You trust in your ability to grow and transform." },
    "11-3": { affirmation: "You choose love, joy, and freedom, opening your heart to beautiful possibilities." },
    "11-4": { affirmation: "You are resilient and can handle anything life throws your way." },
    "11-5": { affirmation: "You are deserving of rest and relaxation." },
    "11-6": { affirmation: "You honor your journey and trust the timing of your life." },
    "11-7": { affirmation: "You embrace change and welcome growth." },
    "11-8": { affirmation: "You are filled with energy and live your life to the fullest." },
    "11-9": { affirmation: "You are the architect of your life; you build its foundation and choose its content." },
    "11-10": { affirmation: "You let go of worry and embrace peace and calm." },
    "11-11": { affirmation: "You deserve love, respect, and kindness." },
    "11-12": { affirmation: "You create your own happiness." },
    "11-13": { affirmation: "You are worthy of all the good things coming to you." },
    "11-14": { affirmation: "You radiate confidence, self-respect, and inner harmony." },
    "11-15": { affirmation: "You trust in the process of life, and you are safe." },
    "11-16": { affirmation: "You are a magnet for positivity, love, and abundance." },
    "11-17": { affirmation: "You trust your inner wisdom and intuition." },
    "11-18": { affirmation: "You release all resistance to attracting money and let it flow easily to you." },
    "11-19": { affirmation: "You are aligned with the energy of abundance." },
    "11-20": { affirmation: "You choose to focus on what you can control." },
    "11-21": { affirmation: "You let go of the need to control and enjoy the peace of letting life flow." },
    "11-22": { affirmation: "You are open to healing and accept that life brings ups and downs." },
    "11-23": { affirmation: "You embrace the present moment and see it as a gift." },
    "11-24": { affirmation: "You are resilient, creative, and capable of overcoming anything." },
    "11-25": { affirmation: "You are grateful for the beauty in life, and you find joy every day." },
    "11-26": { affirmation: "You choose to be kind and patient with yourself." },
    "11-27": { affirmation: "You are open to new and wonderful experiences." },
    "11-28": { affirmation: "You are worthy of success and happiness." },
    "11-29": { affirmation: "You choose peace over worry." },
    "11-30": { affirmation: "You are exactly where you need to be at this moment." },

    // December
    "12-1": { affirmation: "You are grateful for today and all it offers." },
    "12-2": { affirmation: "You trust that you are on the right path." },
    "12-3": { affirmation: "You are proud of all your accomplishments, big and small." },
    "12-4": { affirmation: "You are capable of bringing positive change to your life and others' lives." },
    "12-5": { affirmation: "You are becoming the best version of yourself." },
    "12-6": { affirmation: "You choose to feel peaceful and content today." },
    "12-7": { affirmation: "You trust in your inner wisdom and embrace new challenges." },
    "12-8": { affirmation: "You radiate love and happiness to those around you." },
    "12-9": { affirmation: "You attract success and abundance effortlessly." },
    "12-10": { affirmation: "You are worthy of respect from others and yourself." },
    "12-11": { affirmation: "You choose gratitude and positivity over worry." },
    "12-12": { affirmation: "You are strong, resilient, and brave." },
    "12-13": { affirmation: "You attract only good things into your life." },
    "12-14": { affirmation: "You forgive yourself for past mistakes and learn from them." },
    "12-15": { affirmation: "You are blessed, and you are a blessing to others." },
    "12-16": { affirmation: "You are grateful for all that you have." },
    "12-17": { affirmation: "You are open to receiving love and giving love freely." },
    "12-18": { affirmation: "You are capable of achieving your biggest dreams." },
    "12-19": { affirmation: "You allow yourself to be happy, here and now." },
    "12-20": { affirmation: "You are deeply fulfilled with who you are." },
    "12-21": { affirmation: "You choose to find beauty and joy in each moment." },
    "12-22": { affirmation: "You are grateful for all that is coming into your life." },
    "12-23": { affirmation: "You are a wonderful person, deserving of love and joy." },
    "12-24": { affirmation: "You are surrounded by love and support, always." },
    "12-25": { affirmation: "You allow yourself to feel calm and centered." },
    "12-26": { affirmation: "You are grateful for the people in your life." },
    "12-27": { affirmation: "You are worthy of all the wonderful things life has to offer." },
    "12-28": { affirmation: "You choose to let go of what no longer serves you." },
    "12-29": { affirmation: "You are confident, powerful, and unstoppable." },
    "12-30": { affirmation: "You are proud of all you have achieved this year." },
    "12-31": { affirmation: "You are ready to welcome a new year filled with endless possibilities." }

    // Continue adding for the remaining months

};

const dailySongs = {
    "1-1": { song: "Happy by Pharrell Williams" }, // Pop
    "1-2": { song: "Blinding Lights by The Weeknd" }, // Synthwave
    "1-3": { song: "Shape of You by Ed Sheeran" }, // Pop
    "1-4": { song: "Rolling in the Deep by Adele" }, // Soul
    "1-5": { song: "Uptown Funk by Mark Ronson ft. Bruno Mars" }, // Funk
    "1-6": { song: "Lose Yourself by Eminem" }, // Hip-Hop
    "1-7": { song: "Bohemian Rhapsody by Queen" }, // Rock
    "1-8": { song: "Stay by The Kid LAROI & Justin Bieber" }, // Pop
    "1-9": { song: "Savage Love by Jawsh 685 & Jason Derulo" }, // Pop
    "1-10": { song: "Watermelon Sugar by Harry Styles" }, // Pop
    "1-11": { song: "Someone Like You by Adele" }, // Soul
    "1-12": { song: "Seven Nation Army by The White Stripes" }, // Rock
    "1-13": { song: "Shallow by Lady Gaga & Bradley Cooper" }, // Pop
    "1-14": { song: "Old Town Road by Lil Nas X" }, // Country/Rap
    "1-15": { song: "Thank U, Next by Ariana Grande" }, // Pop
    "1-16": { song: "Take On Me by a-ha" }, // Synthpop
    "1-17": { song: "Hey Jude by The Beatles" }, // Rock
    "1-18": { song: "I Will Always Love You by Whitney Houston" }, // Soul
    "1-19": { song: "Teenage Dirtbag by Wheatus" }, // Rock
    "1-20": { song: "Bad Guy by Billie Eilish" }, // Electropop
    "1-21": { song: "Dance Monkey by Tones and I" }, // Pop
    "1-22": { song: "Ain't No Mountain High Enough by Marvin Gaye & Tammi Terrell" }, // Soul
    "1-23": { song: "Born to Run by Bruce Springsteen" }, // Rock
    "1-24": { song: "Radioactive by Imagine Dragons" }, // Rock
    "1-25": { song: "All of Me by John Legend" }, // R&B
    "1-26": { song: "Cry Me a River by Justin Timberlake" }, // R&B
    "1-27": { song: "Take Me to Church by Hozier" }, // Indie
    "1-28": { song: "Girls Like You by Maroon 5" }, // Pop
    "1-29": { song: "Before He Cheats by Carrie Underwood" }, // Country
    "1-30": { song: "Counting Stars by OneRepublic" }, // Pop-Rock
    "1-31": { song: "Mr. Brightside by The Killers" }, // Indie Rock

    "2-1": { song: "Lose Control by Missy Elliott" }, // Hip-Hop
    "2-2": { song: "Can't Stop the Feeling! by Justin Timberlake" }, // Pop
    "2-3": { song: "With or Without You by U2" }, // Rock
    "2-4": { song: "Valerie by Mark Ronson ft. Amy Winehouse" }, // Funk
    "2-5": { song: "Just the Way You Are by Bruno Mars" }, // R&B
    "2-6": { song: "Wake Me Up by Avicii" }, // EDM
    "2-7": { song: "Mirrors by Justin Timberlake" }, // R&B
    "2-8": { song: "Take It Easy by Eagles" }, // Classic Rock
    "2-9": { song: "Tik Tok by Kesha" }, // Pop
    "2-10": { song: "Clandestino by Manu Chao" }, // Latin
    "2-11": { song: "Here Comes the Sun by The Beatles" }, // Rock
    "2-12": { song: "Rolling in the Deep by Adele" }, // Soul
    "2-13": { song: "Love Shack by The B-52's" }, // New Wave
    "2-14": { song: "I Want It That Way by Backstreet Boys" }, // Pop
    "2-15": { song: "Ain't It Fun by Paramore" }, // Rock
    "2-16": { song: "Come Together by The Beatles" }, // Rock
    "2-17": { song: "Hotline Bling by Drake" }, // Hip-Hop
    "2-18": { song: "All of Me by John Legend" }, // R&B
    "2-19": { song: "Wonderwall by Oasis" }, // Britpop
    "2-20": { song: "Bitter Sweet Symphony by The Verve" }, // Rock
    "2-21": { song: "Girls Like You by Maroon 5" }, // Pop
    "2-22": { song: "Karma Chameleon by Culture Club" }, // Pop
    "2-23": { song: "Sweet Home Alabama by Lynyrd Skynyrd" }, // Southern Rock
    "2-24": { song: "Dreams by Fleetwood Mac" }, // Rock
    "2-25": { song: "Time After Time by Cyndi Lauper" }, // Pop
    "2-26": { song: "Fight Song by Rachel Platten" }, // Pop
    "2-27": { song: "Three Little Birds by Bob Marley" }, // Reggae
    "2-28": { song: "Dancing Queen by ABBA" }, // Disco
    "2-29": { song: "Somebody to Love by Queen" }, // Rock

    "3-1": { song: "Radioactive by Imagine Dragons" }, // Rock
    "3-2": { song: "Last Friday Night (T.G.I.F.) by Katy Perry" }, // Pop
    "3-3": { song: "Stayin' Alive by Bee Gees" }, // Disco
    "3-4": { song: "luther by Kendrick Lamar and SZA" }, // Rock
    "3-5": { song: "Thinkin Bout You by Frank Ocean" }, // Pop
    "3-6": { song: "Can't Feel My Face by The Weeknd" }, // R&B
    "3-7": { song: "I Gotta Feeling by The Black Eyed Peas" }, // Pop
    "3-8": { song: "Mr. Brightside by The Killers" }, // Indie Rock
    "3-9": { song: "Kiss by Prince" }, // Funk
    "3-10": { song: "Walking on Sunshine by Katrina and the Waves" }, // Pop
    "3-11": { song: "Jolene by Dolly Parton" }, // Country
    "3-12": { song: "The Way You Make Me Feel by Michael Jackson" }, // Pop
    "3-13": { song: "Let It Go by Idina Menzel" }, // Soundtrack
    "3-14": { song: "My Heart Will Go On by Celine Dion" }, // Soundtrack
    "3-15": { song: "Take My Breath Away by Berlin" }, // Pop
    "3-16": { song: "Somebody That I Used To Know by Gotye" }, // Indie
    "3-17": { song: "Trip by Ella Mai" }, // R&B
    "3-18": { song: "Smells Like Teen Spirit by Nirvana" }, // Grunge
    "3-19": { song: "Chasing Cars by Snow Patrol" }, // Alternative Rock
    "3-20": { song: "In the End by Linkin Park" }, // Nu Metal
    "3-21": { song: "Boys of Summer by Don Henley" }, // Rock
    "3-22": { song: "Say So by Doja Cat" }, // Pop
    "3-23": { song: "I Want You Back by The Jackson 5" }, // Motown
    "3-24": { song: "The Sound of Silence by Simon & Garfunkel" }, // Folk Rock
    "3-25": { song: "Sunday Morning by Maroon 5" }, // Pop
    "3-26": { song: "What a Wonderful World by Louis Armstrong" }, // Jazz
    "3-27": { song: "The A Team by Ed Sheeran" }, // Folk
    "3-28": { song: "Fight Song by Rachel Platten" }, // Pop
    "3-29": { song: "Uptown Girl by Billy Joel" }, // Pop
    "3-30": { song: "All Star by Smash Mouth" }, // Rock
    "3-31": { song: "Dreams by Fleetwood Mac" }, // Rock

    "4-1": { song: "Sweet Child o' Mine by Guns N' Roses" }, // Rock
    "4-2": { song: "Toxic by Britney Spears" }, // Pop
    "4-3": { song: "All of Me by John Legend" }, // R&B
    "4-4": { song: "Say You Won't Let Go by James Arthur" }, // Pop
    "4-5": { song: "No Scrubs by TLC" }, // R&B
    "4-6": { song: "Take Me Home, Country Roads by John Denver" }, // Country
    "4-7": { song: "Shallow by Lady Gaga and Bradley Cooper" }, // Soundtrack
    "4-8": { song: "A Thousand Years by Christina Perri" }, // Soundtrack
    "4-9": { song: "Clair de Lune by Claude Debussy" }, // Classical
    "4-10": { song: "Here I Go Again by Whitesnake" }, // Rock
    "4-11": { song: "Jump by Van Halen" }, // Rock
    "4-12": { song: "Don't Stop Believin' by Journey" }, // Rock
    "4-13": { song: "Livin' on a Prayer by Bon Jovi" }, // Rock
    "4-14": { song: "Girls Just Want to Have Fun by Cyndi Lauper" }, // Pop
    "4-15": { song: "I Will Survive by Gloria Gaynor" }, // Disco
    "4-16": { song: "Under Pressure by Queen & David Bowie" }, // Rock
    "4-17": { song: "Bad Romance by Lady Gaga" }, // Pop
    "4-18": { song: "Summer of '69 by Bryan Adams" }, // Rock
    "4-19": { song: "Bleeding Love by Leona Lewis" }, // Pop
    "4-20": { song: "Gimme! Gimme! Gimme! (A Man After Midnight) by ABBA" }, // Disco
    "4-21": { song: "Bye Bye Bye by *NSYNC" }, // Pop
    "4-22": { song: "How Do I Live by LeAnn Rimes" }, // Country
    "4-23": { song: "Oops!... I Did It Again by Britney Spears" }, // Pop
    "4-24": { song: "Dancing in the Dark by Bruce Springsteen" }, // Rock
    "4-25": { song: "Got You Where I Want You by The Flys" }, // Alternative Rock
    "4-26": { song: "Don't Speak by No Doubt" }, // Ska
    "4-27": { song: "Chasing Cars by Snow Patrol" }, // Alternative
    "4-28": { song: "Counting Stars by OneRepublic" }, // Pop-Rock
    "4-29": { song: "What Makes You Beautiful by One Direction" }, // Pop
    "4-30": { song: "Poker Face by Lady Gaga" }, // Pop

    "5-1": { song: "Shut Up and Dance by WALK THE MOON" }, // Pop-Rock
    "5-2": { song: "Technology by The 1975" }, // Alternative Rock
    "5-3": { song: "Waiting on the World to Change by John Mayer" }, // Pop
    "5-4": { song: "I've Just Seen a Face by The Beatles" }, // Rock
    "5-5": { song: "My Immortal by Evanescence" }, // Rock
    "5-6": { song: "You Are the Best Thing by Ray Lamontagne" }, // Folk Rock
    "5-7": { song: "With Arms Wide Open by Creed" }, // Rock
    "5-8": { song: "Need You Now by Lady A" }, // Country
    "5-9": { song: "Take a Bow by Rihanna" }, // Pop
    "5-10": { song: "Back to December by Taylor Swift" }, // Country
    "5-11": { song: "Love on the Brain by Rihanna" }, // R&B
    "5-12": { song: "Never Gonna Give You Up by Rick Astley" }, // Pop
    "5-13": { song: "Shape of You by Ed Sheeran" }, // Pop
    "5-14": { song: "Shivers by Ed Sheeran" }, // Pop
    "5-15": { song: "Rockstar by Post Malone" }, // Hip-Hop
    "5-16": { song: "Ain't No Sunshine by Bill Withers" }, // Soul
    "5-17": { song: "Born This Way by Lady Gaga" }, // Pop
    "5-18": { song: "No Tears Left to Cry by Ariana Grande" }, // Pop
    "5-19": { song: "Tears Dry on Their Own by Amy Winehouse" }, // Soul
    "5-20": { song: "Summer by Calvin Harris" }, // EDM
    "5-21": { song: "Love Story by Taylor Swift" }, // Country
    "5-22": { song: "Hot in Herre by Nelly" }, // Hip-Hop
    "5-23": { song: "Call Me Maybe by Carly Rae Jepsen" }, // Pop
    "5-24": { song: "Spice Up Your Life by Spice Girls" }, // Pop
    "5-25": { song: "Buckcherry by Crazy Bitch" }, // Rock
    "5-26": { song: "Ride by Twenty One Pilots" }, // Indie
    "5-27": { song: "Dirt Road Anthem by Jason Aldean" }, // Country
    "5-28": { song: "Waiting All Night by Rudimental" }, // EDM
    "5-29": { song: "A Thousand Years by Christina Perri" }, // Pop
    "5-30": { song: "The Climb by Miley Cyrus" }, // Pop
    "5-31": { song: "One More Night by Maroon 5" }, // Pop

    "6-1": { song: "Wake Me Up by Avicii" }, // EDM
    "6-2": { song: "Thrift Shop by Macklemore & Ryan Lewis" }, // Hip-Hop
    "6-3": { song: "Shut Up and Dance by WALK THE MOON" }, // Pop-Rock
    "6-4": { song: "Good Vibrations by The Beach Boys" }, // Pop
    "6-5": { song: "Every Breath You Take by The Police" }, // Rock
    "6-6": { song: "Crazy by Gnarls Barkley" }, // Neo-Soul
    "6-7": { song: "Don't Speak by No Doubt" }, // Ska
    "6-8": { song: "Umbrella by Rihanna ft. Jay-Z" }, // Pop
    "6-9": { song: "Insomnia by Faithless" }, // EDM
    "6-10": { song: "Valerie by Mark Ronson ft. Amy Winehouse" }, // Funk
    "6-11": { song: "Believer by Imagine Dragons" }, // Rock
    "6-12": { song: "Shape of You by Ed Sheeran" }, // Pop
    "6-13": { song: "I Shot the Sheriff by Eric Clapton" }, // Rock
    "6-14": { song: "Watermelon Sugar by Harry Styles" }, // Pop
    "6-15": { song: "Count on Me by Bruno Mars" }, // Pop
    "6-16": { song: "Bad Romance by Lady Gaga" }, // Pop
    "6-17": { song: "Put It All on Me by Ed Sheeran" }, // Pop
    "6-18": { song: "Hometown Glory by Adele" }, // Soul
    "6-19": { song: "Jungle Boogie by Kool & The Gang" }, // Funk
    "6-20": { song: "Just the Way You Are by Bruno Mars" }, // R&B
    "6-21": { song: "All The Small Things by Blink-182" }, // Pop-Punk
    "6-22": { song: "Somebody to Love by Jefferson Airplane" }, // Rock
    "6-23": { song: "Stronger by Kanye West" }, // Hip-Hop
    "6-24": { song: "Mamma Mia by ABBA" }, // Pop
    "6-25": { song: "Summer of '69 by Bryan Adams" }, // Rock
    "6-26": { song: "Lady by Little River Band" }, // Rock
    "6-27": { song: "Kryptonite by 3 Doors Down" }, // Rock
    "6-28": { song: "Shallow by Lady Gaga & Bradley Cooper" }, // Soundtrack
    "6-29": { song: "Old Town Road by Lil Nas X" }, // Country/Rap
    "6-30": { song: "Say So by Doja Cat" }, // Pop

    "7-1": { song: "Satisfaction by The Rolling Stones" }, // Rock
    "7-2": { song: "Shine by The New Radicals" }, // Rock
    "7-3": { song: "If I Ain't Got You by Alicia Keys" }, // R&B
    "7-4": { song: "Born to Run by Bruce Springsteen" }, // Rock
    "7-5": { song: "Numb by Linkin Park" }, // Rock
    "7-6": { song: "Rolling in the Deep by Adele" }, // Soul
    "7-7": { song: "Summer of '69 by Bryan Adams" }, // Rock
    "7-8": { song: "Super Bass by Nicki Minaj" }, // Hip-Hop
    "7-9": { song: "We Found Love by Rihanna ft. Calvin Harris" }, // Pop
    "7-10": { song: "Truth Hurts by Lizzo" }, // R&B
    "7-11": { song: "Lose Yourself by Eminem" }, // Hip-Hop
    "7-12": { song: "Happy by Pharrell Williams" }, // Pop
    "7-13": { song: "Bye Bye Bye by *NSYNC" }, // Pop
    "7-14": { song: "Teenage Dream by Katy Perry" }, // Pop
    "7-15": { song: "Bills, Bills, Bills by Destiny's Child" }, // R&B
    "7-16": { song: "Get Lucky by Daft Punk ft. Pharrell Williams" }, // Disco
    "7-17": { song: "Treasure by Bruno Mars" }, // Funk
    "7-18": { song: "Born to be Wild by Steppenwolf" }, // Rock
    "7-19": { song: "Every Rose Has Its Thorn by Poison" }, // Rock
    "7-20": { song: "I Will Always Love You by Whitney Houston" }, // Soul
    "7-21": { song: "Perfect by Ed Sheeran" }, // Pop
    "7-22": { song: "Say It Right by Nelly Furtado" }, // Pop
    "7-23": { song: "Little Lion Man by Mumford & Sons" }, // Folk Rock
    "7-24": { song: "Proud Mary by Tina Turner" }, // Rock
    "7-25": { song: "Smooth by Santana ft. Rob Thomas" }, // Rock
    "7-26": { song: "Big Fun by The B-52's" }, // New Wave
    "7-27": { song: "American Pie by Don McLean" }, // Folk Rock
    "7-28": { song: "Gerudo Valley Theme by Koji Kondo" }, // Instrumental
    "7-29": { song: "Counting Stars by OneRepublic" }, // Pop-Rock
    "7-30": { song: "September by Earth, Wind & Fire" }, // Funk
    "7-31": { song: "Ain't No Mountain High Enough by Marvin Gaye & Tammi Terrell" }, // Soul

    "8-1": { song: "I Want to Break Free by Queen" }, // Rock
    "8-2": { song: "We Are Young by Fun." }, // Indie Pop
    "8-3": { song: "Shake It Off by Taylor Swift" }, // Pop
    "8-4": { song: "Zombie by The Cranberries" }, // Rock
    "8-5": { song: "Big Girls Don't Cry by Fergie" }, // Pop
    "8-6": { song: "Stay by Rihanna ft. Mikky Ekko" }, // Pop
    "8-7": { song: "Take It Easy by Eagles" }, // Classic Rock
    "8-8": { song: "Candle in the Wind by Elton John" }, // Rock
    "8-9": { song: "Every Breath You Take by The Police" }, // Rock
    "8-10": { song: "Back to Black by Amy Winehouse" }, // Soul
    "8-11": { song: "Mr. Brightside by The Killers" }, // Indie Rock
    "8-12": { song: "Nobody Wants to Be Lonely by Ricky Martin & Christina Aguilera" }, // Pop
    "8-13": { song: "All the Small Things by Blink-182" }, // Pop-Punk
    "8-14": { song: "Boulevard of Broken Dreams by Green Day" }, // Rock
    "8-15": { song: "Lose Yourself by Eminem" }, // Hip-Hop
    "8-16": { song: "Chasing Cars by Snow Patrol" }, // Alternative
    "8-17": { song: "With Arms Wide Open by Creed" }, // Rock
    "8-18": { song: "Bleeding Love by Leona Lewis" }, // Pop
    "8-19": { song: "Summer of '69 by Bryan Adams" }, // Rock
    "8-20": { song: "Landslide by Fleetwood Mac" }, // Rock
    "8-21": { song: "Livin' on a Prayer by Bon Jovi" }, // Rock
    "8-22": { song: "Valerie by Mark Ronson ft. Amy Winehouse" }, // Funk
    "8-23": { song: "Hallelujah by Jeff Buckley" }, // Rock
    "8-24": { song: "Mamma Mia by ABBA" }, // Pop
    "8-25": { song: "Everybody Wants to Rule the World by Tears for Fears" }, // Rock
    "8-26": { song: "Blow by Kesha" }, // Pop
    "8-27": { song: "Wildest Dreams by Taylor Swift" }, // Pop
    "8-28": { song: "Can't Stop by Red Hot Chili Peppers" }, // Rock
    "8-29": { song: "Man in the Mirror by Michael Jackson" }, // Pop
    "8-30": { song: "Under Pressure by Queen & David Bowie" }, // Rock
    "8-31": { song: "Radioactive by Imagine Dragons" }, // Rock

    "9-1": { song: "Good Riddance (Time of Your Life) by Green Day" }, // Rock
    "9-2": { song: "Hotline Bling by Drake" }, // Hip-Hop
    "9-3": { song: "Take on Me by a-ha" }, // Synthpop
    "9-4": { song: "Thinking Out Loud by Ed Sheeran" }, // Pop
    "9-5": { song: "Ain't Nobody by Chaka Khan" }, // Funk
    "9-6": { song: "Rolling in the Deep by Adele" }, // Soul
    "9-7": { song: "Runaway by Kanye West" }, // Hip-Hop
    "9-8": { song: "Empire State of Mind by Jay-Z & Alicia Keys" }, // Hip-Hop
    "9-9": { song: "Everybody (Backstreet's Back) by Backstreet Boys" }, // Pop
    "9-10": { song: "Sugar by Maroon 5" }, // Pop
    "9-11": { song: "Cry Me a River by Justin Timberlake" }, // R&B
    "9-12": { song: "Put It All on Me by Ed Sheeran" }, // Pop
    "9-13": { song: "Bleeding Love by Leona Lewis" }, // Pop
    "9-14": { song: "Hot Stuff by Donna Summer" }, // Disco
    "9-15": { song: "Stronger by Kelly Clarkson" }, // Pop
    "9-16": { song: "Rock Your Body by Justin Timberlake" }, // R&B
    "9-17": { song: "Bye Bye Bye by *NSYNC" }, // Pop
    "9-18": { song: "Let's Get It On by Marvin Gaye" }, // Soul
    "9-19": { song: "Here Comes the Sun by The Beatles" }, // Rock
    "9-20": { song: "Don't Stop Believin' by Journey" }, // Rock
    "9-21": { song: "Stronger by Kanye West" }, // Hip-Hop
    "9-22": { song: "Dancing Queen by ABBA" }, // Disco
    "9-23": { song: "I Want It That Way by Backstreet Boys" }, // Pop
    "9-24": { song: "Supremacy by Muse" }, // Rock
    "9-25": { song: "Can't Help Falling in Love by Elvis Presley" }, // Rock
    "9-26": { song: "Ain't Nobody by Chaka Khan" }, // Funk
    "9-27": { song: "Only Girl (In The World) by Rihanna" }, // Pop
    "9-28": { song: "Thinking Out Loud by Ed Sheeran" }, // Pop
    "9-29": { song: "Sweet Child o' Mine by Guns N' Roses" }, // Rock
    "9-30": { song: "Jump by Van Halen" }, // Rock

    "10-1": { song: "We Are Never Ever Getting Back Together by Taylor Swift" }, // Pop
    "10-2": { song: "Happy by Pharrell Williams" }, // Pop
    "10-3": { song: "Let’s Get It On by Marvin Gaye" }, // Soul
    "10-4": { song: "Chasing Cars by Snow Patrol" }, // Alternative Rock
    "10-5": { song: "Shake It Off by Taylor Swift" }, // Pop
    "10-6": { song: "Thank U, Next by Ariana Grande" }, // Pop
    "10-7": { song: "Irreplaceable by Beyoncé" }, // R&B
    "10-8": { song: "Someone Like You by Adele" }, // Soul
    "10-9": { song: "I Gotta Feeling by The Black Eyed Peas" }, // Pop
    "10-10": { song: "Let It Go by Idina Menzel" }, // Soundtrack
    "10-11": { song: "See You Again by Wiz Khalifa ft. Charlie Puth" }, // Hip-Hop
    "10-12": { song: "Tell Me You Love Me by Demi Lovato" }, // Pop
    "10-13": { song: "Bright Lights Bigger City by CeeLo Green" }, // R&B
    "10-14": { song: "Dancing on My Own by Robyn" }, // Pop
    "10-15": { song: "Someone You Loved by Lewis Capaldi" }, // Pop
    "10-16": { song: "Say You Won't Let Go by James Arthur" }, // Pop
    "10-17": { song: "Thinking Out Loud by Ed Sheeran" }, // Pop
    "10-18": { song: "Run the World (Girls) by Beyoncé" }, // R&B
    "10-19": { song: "Back to December by Taylor Swift" }, // Country
    "10-20": { song: "All of Me by John Legend" }, // R&B
    "10-21": { song: "One Kiss by Calvin Harris & Dua Lipa" }, // Dance
    "10-22": { song: "The Greatest by Sia" }, // Pop
    "10-23": { song: "Never Forget You by Zara Larsson ft. MNEK" }, // Dance-Pop
    "10-24": { song: "Lean on by Major Lazer" }, // EDM
    "10-25": { song: "Finesse by Bruno Mars" }, // R&B
    "10-26": { song: "Love Me Like You Do by Ellie Goulding" }, // Pop
    "10-27": { song: "Closer by The Chainsmokers" }, // EDM
    "10-28": { song: "Ignition (Remix) by R. Kelly" }, // R&B
    "10-29": { song: "Shape of You by Ed Sheeran" }, // Pop
    "10-30": { song: "Uptown Funk by Mark Ronson ft. Bruno Mars" }, // Funk
    "10-31": { song: "Thriller by Michael Jackson" }, // Pop

    "11-1": { song: "Somebody That I Used to Know by Gotye" }, // Indie Pop
    "11-2": { song: "Party in the USA by Miley Cyrus" }, // Pop
    "11-3": { song: "Need You Now by Lady A" }, // Country
    "11-4": { song: "Hotline Bling by Drake" }, // Hip-Hop
    "11-5": { song: "Stay by Rihanna ft. Mikky Ekko" }, // Pop
    "11-6": { song: "Somebody to Love by Queen" }, // Rock
    "11-7": { song: "Just a Girl by No Doubt" }, // Pop-Rock
    "11-8": { song: "Knocking on Heaven's Door by Bob Dylan" }, // Folk Rock
    "11-9": { song: "Wake Me Up by Avicii" }, // EDM
    "11-10": { song: "Stand by Me by Ben E. King" }, // Soul
    "11-11": { song: "Chasing Cars by Snow Patrol" }, // Alternative Rock
    "11-12": { song: "I'm Yours by Jason Mraz" }, // Folk
    "11-13": { song: "Love Yourself by Justin Bieber" }, // Pop
    "11-14": { song: "What Do You Mean? by Justin Bieber" }, // Pop
    "11-15": { song: "Bad Blood by Taylor Swift" }, // Pop
    "11-16": { song: "Royals by Lorde" }, // Indie
    "11-17": { song: "Shape of You by Ed Sheeran" }, // Pop
    "11-18": { song: "We Can't Stop by Miley Cyrus" }, // Pop
    "11-19": { song: "Sugar by Maroon 5" }, // Pop
    "11-20": { song: "Issues by Julia Michaels" }, // Pop
    "11-21": { song: "Young Dumb & Broke by Khalid" }, // R&B
    "11-22": { song: "New Rules by Dua Lipa" }, // Pop
    "11-23": { song: "Perfect by Ed Sheeran" }, // Pop
    "11-24": { song: "Betty by Taylor Swift" }, // Country
    "11-25": { song: "Someone You Loved by Lewis Capaldi" }, // Pop
    "11-26": { song: "Good Riddance (Time of Your Life) by Green Day" }, // Rock
    "11-27": { song: "Bohemian Rhapsody by Queen" }, // Rock
    "11-28": { song: "Mr. Brightside by The Killers" }, // Indie
    "11-29": { song: "Someone Like You by Adele" }, // Soul
    "11-30": { song: "Hurt by Christina Aguilera" }, // Pop

    "12-1": { song: "Jingle Bells by Bing Crosby" }, // Holiday
    "12-2": { song: "Last Christmas by Wham!" }, // Holiday
    "12-3": { song: "All I Want for Christmas Is You by Mariah Carey" }, // Holiday
    "12-4": { song: "Feliz Navidad by José Feliciano" }, // Holiday
    "12-5": { song: "Santa Baby by Eartha Kitt" }, // Holiday
    "12-6": { song: "Wonderful Christmastime by Paul McCartney" }, // Holiday
    "12-7": { song: "Do They Know It's Christmas? by Band Aid" }, // Holiday
    "12-8": { song: "Christmas (Baby Please Come Home) by Darlene Love" }, // Holiday
    "12-9": { song: "Rudolph the Red-Nosed Reindeer by Gene Autry" }, // Holiday
    "12-10": { song: "It's Beginning to Look a Lot Like Christmas by Perry Como" }, // Holiday
    "12-11": { song: "Rockin' Around the Christmas Tree by Brenda Lee" }, // Holiday
    "12-12": { song: "Blue Christmas by Elvis Presley" }, // Holiday
    "12-13": { song: "Silver Bells by Bing Crosby & Carol Richards" }, // Holiday
    "12-14": { song: "Sleigh Ride by The Ronettes" }, // Holiday
    "12-15": { song: "A Holly Jolly Christmas by Burl Ives" }, // Holiday
    "12-16": { song: "Let It Snow! Let It Snow! Let It Snow! by Dean Martin" }, // Holiday
    "12-17": { song: "Happy Christmas (War Is Over) by John Lennon" }, // Holiday
    "12-18": { song: "The Christmas Song by Nat King Cole" }, // Holiday
    "12-19": { song: "Have Yourself a Merry Little Christmas by Judy Garland" }, // Holiday
    "12-20": { song: "Deck the Halls by Bing Crosby" }, // Holiday
    "12-21": { song: "Jingle Bell Rock by Bobby Helms" }, // Holiday
    "12-22": { song: "Christmas Time Is Here by Vince Guaraldi" }, // Holiday
    "12-23": { song: "What Child Is This? by Andrea Bocelli" }, // Holiday
    "12-24": { song: "O Holy Night by Mariah Carey" }, // Holiday
    "12-25": { song: "We Wish You a Merry Christmas by Traditional" }, // Holiday
    "12-26": { song: "Winter Wonderland by Bing Crosby" }, // Holiday
    "12-27": { song: "The Little Drummer Boy by Joan Jett" }, // Holiday
    "12-28": { song: "Merry Christmas Everyone by Shakin' Stevens" }, // Holiday
    "12-29": { song: "Happy New Year by ABBA" }, // Holiday
    "12-30": { song: "Frosty the Snowman by Gene Autry" }, // Holiday
    "12-31": { song: "New Year's Day by Taylor Swift" }, // Pop
};
