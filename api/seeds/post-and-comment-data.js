const CONTENT = [
    {
      content:
        "Just discovered the joy of eating ice cream for breakfast. Adulting level: Expert. 🍦 #BreakfastOfChampions #LivingMyBestLife",
    },
    {
      content:
        "Lost my keys again today. It's like they have a secret society plotting against me. 🔑😅 #KeyConspiracy #MondayStruggles",
    },
    {
      content:
        "Current mood: Trying to adult but also wondering when nap time is. 😴 #AdultingReality #NapQueen",
    },
    {
      content:
        "Spent the entire weekend binge-watching cat videos. No regrets. 🐾❤️ #CatPerson #WeekendVibes",
    },
    {
      content:
        "Just had a conversation with my houseplants. They're thriving, FYI. 🌿🌱 #PlantParent #GreenThumb",
    },
    {
      content:
        "Decided to organize my closet today. Found clothes I forgot I owned. Shopping spree at home! 👗🛍️ #ClosetTreasures #FashionSurprise",
    },
    {
      content:
        "Attempting to cook a gourmet meal tonight. Currently Googling 'how not to burn pasta.' 🍝👩‍🍳 #ChefInTheMaking #CookingAdventures",
    },
    {
      content:
        "Successfully adulted today: remembered to water the plants, pay bills, and wear matching socks. Winning at life! 🌧️💸🧦 #AdultingWin #SmallVictories",
    },
    {
      content:
        "Started a new book today. Accidentally finished it. Oops. 📚🤷‍♂️ #BookWorm #CantPutItDown",
    },
    {
      content:
        "Just had a dance party in my living room because why not? 💃🕺 #DanceLikeNoOneIsWatching #FridayFeeling",
    },
    {
      content:
        "Note to self: You are not a morning person. Coffee, do your thing. ☕️😴 #NotAMorningPerson #CoffeePlease",
    },
    {
      content:
        "Tried a new recipe and now my kitchen looks like a crime scene. Send help (and a cleaning service). 🍳🚑 #CookingGoneWrong #KitchenDisaster",
    },
    {
      content:
        "Just discovered the magic of dry shampoo. Laziness level: Expert. 💁‍♀️✨ #LazyDay #DryShampooSavesLives",
    },
    {
      content:
        "Binge-watching a new series and questioning all my life choices. Thanks, Netflix. 📺🤔 #NetflixAndChill #SeriesAddict",
    },
    {
      content:
        "Accidentally liked my ex's photo from 47 weeks ago. Time to disappear. 🕵️‍♂️🚶‍♂️ #SocialMediaFail #AwkwardMoments",
    },
    {
      content:
        "Considering a career change to become a professional napper. Where do I sign up? 😴💤 #DreamJob #NappingPro",
    },
    {
      content:
        "Just spent an hour looking for my phone while using my phone as a flashlight. Smooth move, genius. 🔦📱 #EpicFail #LostAndFound",
    },
    {
      content:
        "Managed to adult today: grocery shopping without buying unnecessary snacks. Who am I? 🛒🍎 #Adulting101 #GroceryWin",
    },
    {
      content:
        "Went to the gym and accidentally made eye contact with my treadmill. Awkward. 🏋️‍♀️👀 #GymLife #AwkwardMoments",
    },
    {
      content:
        "Determined to conquer Monday, but my bed is giving me serious 'stay' vibes. 😴🛌 #MondayMotivation #BedVsReality",
    },
    {
      content:
        "Just had a staring contest with my fridge. The leftovers won. 🍕👀 #FoodieProblems #FridgeStareDown",
    },
    {
      content:
        "Visited a bookstore today and left with five new books. No self-control whatsoever. 📚🛍️ #BookHaul #BookwormProblems",
    },
    {
      content:
        "Successfully avoided adult responsibilities today by binge-watching my favorite TV show. Priorities, right? 📺🛋️ #ProcrastinationQueen #NetflixLife",
    },
    {
      content:
        "Started a DIY project. Currently surrounded by glue, glitter, and regrets. ✂️🎨 #CraftingGoneWrong #DIYDisaster",
    },
    {
      content:
        "Accidentally sent a text to the wrong person. Now waiting for the ground to swallow me whole. 📱😬 #TextingFail #AwkwardMoments",
    },
    {
      content:
        "Just realized I've been wearing my shirt inside out all day. Fashion statement or fashion disaster? 🤔👕 #FashionFauxPas #StyleFail",
    },
    {
      content:
        "Just seen my friend Sam trying to make it home from the pub, he really is a liability #lightweight",
    },
    {
      content:
        "Life update: Finally conquered my fear of public speaking by giving a presentation at work. Adrenaline rush = ✔️🎤 #PersonalGrowth #FearConquered",
    },
    {
      content:
        "Life update: Tried meditation for the first time. Accidentally fell asleep. 🧘‍♂️💤 #MeditationFail #ZenNap",
    },
    {
      content:
        "Enrolled in a cooking class to upgrade my culinary skills. Watch out, Gordon Ramsay! 👨‍🍳🔪 #CookingClassAdventures #ChefInTheMaking",
    },
    {
      content:
        "Life update: Spent the weekend hiking and reconnecting with nature. Feeling rejuvenated and covered in bug bites. 🌳🚶‍♀️ #NatureLover #HikingAdventures",
    },
    {
      content:
        "Embarked on a decluttering mission. Goodbye, unnecessary stuff! 👋🧹 #MinimalismJourney #DeclutteringGoals",
    },
    {
      content:
        "Started learning a new language today. Bonjour, world! 🌎🇫🇷 #LanguageLearning #BonjourLife",
    },
    {
      content:
        "Life update: Successfully survived a week without caffeine. It was a dark and challenging journey. ☕️➡️🚫 #CaffeineDetox #Survivor",
    },
    {
      content:
        "Just signed up for a dance class. Prepare for a whole new level of awkwardness. 💃🕺 #DanceBeginner #NewAdventures",
    },
    {
      content:
        "Embarked on a decluttering mission. Goodbye, unnecessary stuff! 👋🧹 #MinimalismJourney #DeclutteringGoals",
    },
    {
      content: "Just discovered a hidden gem of a coffee shop in the heart of the city. ☕️ Highly recommend for all coffee lovers! #HiddenGems #CoffeeAdventure"
    },
    {
      content: "🌈 Embracing the Monday blues with some positive vibes! What's one thing you're grateful for today? #MondayMotivation #Gratitude"
    },
    {
      content: "Spent the weekend binge-watching my favorite TV series. 🍿 Any recommendations for what to watch next? #WeekendVibes #TVShowMarathon"
    },
    {
      content: "Just finished an intense workout session! Feeling the burn but also feeling accomplished. 💪 #FitnessJourney #NoExcuses"
    },
    {
      content: "🎨 Tried my hand at some DIY crafts today. What's your favorite weekend hobby? #DIYProjects #WeekendFun"
    },
    {
      content: "Caught a beautiful sunset by the beach. Mother Nature never fails to amaze! 🌅 #NatureLover #SunsetMagic"
    },
    {
      content: "New blog post alert! Sharing my top travel tips for making the most of your adventures. ✈️ Check it out on the blog! #TravelTips #Wanderlust"
    },
    {
      content: "Just finished a captivating book that I couldn't put down. 📚 What's the last book you read and loved? #Bookworm #ReadingRecommendations"
    },
    {
      content: "Cooked up a storm in the kitchen today! 🍲 What's your go-to comfort food? #HomeCooking #Foodie"
    },
    {
      content: "Productivity level 💯 today! Knocked out my to-do list and ready to tackle the week ahead. 👊 #MondayMood #ProductiveDay"
    },
    {
      content: "Chasing sunsets and making memories with good friends. 🌇 Tag someone you want to share a sunset with! #FriendshipGoals #SunsetChaser"
    },
    {
      content: "Sunday brunch vibes: pancakes, coffee, and good company. What's your go-to brunch order? 🥞☕️ #BrunchTime #FoodieLife"
    },
    {
      content: "Visited a local art gallery today and got inspired by some amazing creations. 🎨 Share the last piece of art that moved you! #ArtInspiration #GalleryVisit"
    },
    {
      content: "Rainy days call for cozy blankets, hot tea, and a good book. What's your favorite rainy day activity? ☔️📖 #RainyDayMood #CozyVibes"
    },
    {
      content: "Just adopted a furry friend from the local shelter! 🐾 Meet the newest member of the family. Share pics of your pets! #PetAdoption #FurBabyLove"
    },
    {
      content: "Spontaneous road trip to [destination]! 🚗 Share your favorite road trip memories or dream destinations. #RoadTripAdventure #Wanderlust"
    },
    {
      content: "Celebrating small victories today – sometimes the little wins are the most important. What's something you're proud of this week? #SmallWins #CelebrationTime"
    },
    {
      content: "Movie night at home with a classic film and popcorn. 🍿 What's your all-time favorite movie? #MovieNight #ClassicFilm"
    },
    {
      content: "Attended a fascinating webinar on [topic] today. Mind blown! What's the last thing you learned that surprised you? #LearningJourney #WebinarWisdom"
    },
    {
      content: "Diving into a new hobby: photography! 📷 Share your favorite photography tips or your go-to camera. #PhotographyBeginner #CaptureTheMoment"
    },
    {
      content: "Sundays are for self-care. Taking a break to recharge and pamper myself. 💆‍♀️ What's your favorite self-care ritual? #SelfCareSunday #MeTime"
    },
    {
      content: "Exploring the local farmers' market and discovering fresh, organic goodies. 🍅🌽 Support local farmers! #FarmersMarketFinds #EatLocal"
    },
    {
      content: "Binge-watching a new documentary series that has me hooked. 🎬 What's your favorite documentary recommendation? #DocumentaryAddict #MustWatch"
    },
    {
      content: "Reflecting on the past year and setting intentions for the months ahead. ✨ Share a goal you're working towards! #GoalSetting #Reflection"
    },
    {
      content: "Virtual game night with friends – laughter is the best medicine! 😄 What's your favorite online game to play with friends? #GameNight #VirtualFun"
    },
    {
      content: "Morning routine essentials: coffee, journaling, and a good playlist. 🌅 What's a must-have in your morning routine? #MorningRitual #StartTheDayRight"
    },
    {
      content: "Attended an inspiring live performance last night. 🎤 Support local artists! Share your favorite song from an independent artist. #LocalTalent #LiveMusic"
    },
    {
      content: "Cooking up a storm in the kitchen with a new recipe. 🍲 What's your signature dish? #CookingAdventures #FoodieCreations"
    },
    {
      content: "Booked a spontaneous weekend getaway! 🌴 Where's your dream weekend escape? #WeekendGetaway #TravelDreams"
    },
    {
      content: "Gratitude challenge: three things I'm thankful for today. What's at the top of your gratitude list? #GratitudeChallenge #ThankfulHeart"
    },
    {
      content: "Sunday vibes: lazy morning, good book, and a cup of tea. 📚☕️ What's your ideal way to unwind on a lazy day? #LazySunday #RelaxationMode"
    },
    {
      content: "Exploring a new hobby - painting! 🎨 Share your favorite art supplies or tips for beginners. #ArtisticJourney #PaintingAdventures"
    },
    {
      content: "Spent the day in nature, hiking through scenic trails. 🌲 What's your favorite outdoor activity? #NatureHike #OutdoorAdventure"
    },
    {
      content: "Virtual meetup with old friends - distance can't keep us apart! 🖥️ Tag a friend you miss and want to reconnect with. #VirtualReunion #Friendship"
    },
    {
      content: "Mindful moment: practicing meditation to start the day with clarity and focus. 🧘‍♂️ What's your mindfulness routine? #MindfulnessPractice #InnerPeace"
    },
    {
      content: "Sharing a quick and delicious recipe I tried today. 🍲 What's your go-to easy recipe for busy days? #QuickCooking #RecipeShare"
    },
    {
      content: "Spreading positive vibes and good energy! ✨ Tag someone who always brightens your day. #PositiveEnergy #SpreadLove"
    },
    {
      content: "Playlist on repeat: current favorite songs that keep me motivated. 🎶 What's on your playlist right now? #MusicLover #FavoriteSongs"
    },
    {
      content: "Celebrating a work milestone today. Hard work pays off! 🚀 What achievement are you proud of lately? #CareerMilestone #SuccessJourney"
    },
    {
      content: "Mind-blowing documentary alert! Just watched [title]. Highly recommend it for a thought-provoking experience. 📽️ #DocumentaryRecommendation #MustSee"
    },
    {
      content: "Friday night in with a homemade pizza and favorite movie. 🍕🎬 What's your ideal Friday night? #FridayFeeling #MovieNightIn"
    },
    {
      content: "Learning a new language – challenging but so rewarding! 🌐 What languages are you currently learning or interested in? #LanguageLearning #NewSkills"
    },
    {
      content: "Mindful moment: taking a break to appreciate the beauty of a blooming flower. 🌸 Share something that brings you joy in nature! #NatureInspiration #Mindfulness"
    },
    {
      content: "Coffee shop adventures: trying a new espresso blend today. ☕️ Any coffee recommendations from your favorite local spot? #CoffeeExploration #CaffeineFix"
    },
    {
      content: "Virtual book club meeting tonight! 📖 What's the last book that left a lasting impression on you? #BookClubDiscussion #LiteraryChat"
    },
    {
      content: "Spontaneous weekend road trip! 🚗 Share your favorite road trip memories or destinations. #RoadTripAdventures #WeekendGetaway"
    },
    {
      content: "Cooking experiment: attempting a fancy dish for dinner. 🍽️ What's your favorite gourmet recipe? #GourmetCooking #FoodieAdventures"
    },
    {
      content: "Reflecting on the power of kindness today. 💙 Share an act of kindness that made your day or one you've done recently! #KindnessMatters #SpreadLove"
    },
    {
      content: "New podcast obsession alert! 🎙️ Listening to [podcast title]. What's your go-to podcast for entertainment or learning? #PodcastRecommendation #ListeningNow"
    },
    {
      content: "Catching the sunrise and starting the day with positive energy. ☀️ What morning rituals set a positive tone for your day? #MorningMotivation #PositiveStart"
    },
    {
      content: "Visited a local art exhibit and was blown away by the creativity on display. 🎨 Share your favorite art forms or artists! #LocalArtScene #ArtAppreciation"
    },
    {
      content: "Movie marathon night with a mix of classics and new releases. 🍿🎬 What's your must-watch movie for a marathon night? #MovieMarathon #FilmBuff"
    },
    {
      content: "Sunday self-reflection: setting intentions for a positive and productive week ahead. 🌟 What are your goals for the upcoming week? #SundayReflection #GoalSetting"
    },
    {
      content: "Dinner with a view – trying out a new restaurant with a skyline panorama. 🌃 Share your favorite dining spot with a view! #DinnerWithAView #Cityscape"
    },
    {
      content: "Got lost in a good book today – there's nothing like the magic of storytelling. 📚✨ What's the last book that captivated you? #BookLover #ReadingMagic"
    },
    {
      content: "Grateful for the little things: sunshine, laughter, and a warm cup of tea. ☀️😄 What simple joys are you grateful for today? #Gratitude #SimplePleasures"
    },
    {
      content: "Tried a new workout routine and feeling the burn! 🔥 What's your favorite way to stay active? #FitnessJourney #WorkoutMotivation"
    },
    {
      content: "Cooking up a storm with a twist – experimenting with international recipes. 🌍🍲 Share your favorite global cuisine! #InternationalFlavors #CookingAdventure"
    },
    {
      content: "Digital detox day – unplugging to recharge and connect with the world offline. 📵 How do you practice digital detox? #DigitalDetox #UnplugAndRecharge"
    },
    {
      content: "Midweek motivation: tackling challenges with a positive mindset. 💪✨ What motivates you to push through the midweek slump? #MidweekMotivation #PositiveMindset"
    },
    {
      content: "Spending the weekend in nature – hiking trails, breathing fresh air, and enjoying the serenity. 🌲 What's your favorite outdoor escape? #WeekendNatureTrip #OutdoorAdventure"
    },
    {
      content: "Virtual cooking challenge with friends – each of us is trying a new recipe. 🍽️ Share your favorite dishes to cook with friends! #CookingChallenge #FoodieFun"
    },
    {
      content: "Favorite quote of the day: 'In the middle of difficulty lies opportunity.' - Albert Einstein. 💡 What's a quote that inspires you? #QuoteOfTheDay #Inspiration"
    },
    {
      content: "Saturday vibes: exploring the local farmers' market and indulging in fresh produce. 🍅🥦 What's your farmers' market must-have? #FarmersMarketJoy #FreshProduce"
    },
    {
      content: "Just finished a DIY home decor project! 🛋️ What's your favorite way to personalize your living space? #DIYHomeDecor #CreativityUnleashed"
    },
    {
      content: "Virtual game night with friends – competition and laughter all in one! 🎮 What's your go-to game for a virtual hangout? #GameNightFun #VirtualGaming"
    },
    {
      content: "Midweek mindfulness: a quick meditation break to reset and refocus. 🧘‍♂️ How do you incorporate mindfulness into your day? #MindfulMoments #WellnessWednesday"
    },
    {
      content: "Reflecting on the joy of learning – what's a new skill you've recently acquired? 🎓 Share your learning journey! #ContinuousLearning #SkillDevelopment"
    },
    {
      content: "Saturday soundtrack: creating a playlist for the day. 🎶 What songs are on your weekend playlist right now? #MusicIsLife #WeekendVibes"
    },
    {
      content: "Reminiscing about a memorable travel adventure. ✈️ Share a travel memory that always brings a smile to your face! #TravelMemories #Wanderlust"
    },
    {
      content: "Sunday reading corner: getting lost in the pages of a captivating novel. 📖 What's your current literary escape? #Bookworm #ReadingCorner"
    },
    {
      content: "Morning ritual: a strong cup of coffee and setting daily intentions. ☕️✨ Share your morning routine essentials! #MorningRitual #CoffeeLover"
    },
    {
      content: "Celebrating small victories – because every step forward is worth acknowledging. 🎉 What's a recent achievement you're proud of? #SmallWins #Celebration"
    },
    {
      content: "Midweek creativity boost: trying my hand at painting with bold colors. 🎨 What's your favorite form of creative expression? #ArtisticJourney #CreativityFlow"
    },
    {
      content: "Digital art exploration day – discovering new techniques and styles. 🖌️ Share your favorite digital art pieces or tools! #DigitalArt #ArtisticDiscovery"
    },
    {
      content: "Fitness challenge accepted! Pushing my limits and feeling stronger. 💪 What's your favorite workout challenge? #FitnessChallenge #HealthyLiving"
    },
    {
      content: "Cooking up a storm with a new recipe – the kitchen is my creative playground. 🍲 Share your favorite go-to recipe! #CookingAdventure #FoodieCreativity"
    },
    {
      content: "Tech discovery of the week: a productivity app that's a game-changer. 📱 What apps keep you organized and efficient? #ProductivityTools #TechDiscovery"
    },
    {
      content: "Virtual concert night with a favorite artist's live performance. 🎤 What's the last concert you attended, virtual or in-person? #MusicLover #ConcertMemories"
    },
    {
      content: "Sunday sunset reflections: appreciating the beauty of endings and new beginnings. 🌅 What does the sunset symbolize for you? #SunsetReflections #NewBeginnings"
    },
    {
      content: "Saturday morning playlist: uplifting tunes to start the weekend on a positive note. 🎵 What's your favorite weekend soundtrack? #WeekendVibes #MusicIsLife"
    },
    {
      content: "Exploring a new hobby: photography. Capturing moments and telling stories through the lens. 📷 Share your favorite photography tips! #PhotographyJourney #CaptureTheMoment"
    },
    {
      content: "Favorite podcast episode of the week: [episode title]. Engaging conversations and thought-provoking content. 🎙️ What podcasts are you currently enjoying? #PodcastRecommendation #ListenUp"
    },
    {
      content: "Midweek adventure: trying a new outdoor activity. Embracing challenges and enjoying the journey. 🏞️ What's your favorite outdoor adventure? #AdventureTime #OutdoorFun"
    },
    {
      content: "Mindfulness moment: taking a pause to appreciate the beauty of the present moment. 🌺 How do you practice mindfulness in your daily life? #MindfulLiving #PresentMoment"
    },
    {
      content: "Spent the day volunteering for a cause close to my heart. Making a positive impact in the community. ❤️ Share your favorite volunteering experiences! #VolunteerWork #CommunityService"
    },
    {
      content: "Virtual travel experience: exploring cultural documentaries and feeling transported to different parts of the world. 🌍 What's your favorite travel documentary? #VirtualTravel #DocumentaryLove"
    },
    {
      content: "Friday night at-home spa: relaxation, pampering, and unwinding after a busy week. 🛁 What's your favorite self-care ritual? #SelfCareFriday #SpaNight"
    },
    {
      content: "Reflecting on personal growth and the lessons learned this month. 🌱 Share a personal growth moment you're proud of! #PersonalDevelopment #GrowthJourney"
    },
    {
      content: "Sunday project: creating a vision board for the upcoming month. Setting intentions and visualizing goals. ✨ What's on your vision board? #VisionBoard #GoalSetting"
    },
    {
      content: "New week, new challenges! Ready to conquer my to-do list and embrace the opportunities ahead. 💪 What goals are you tackling this week? #MondayMotivation #NewWeekNewGoals"
    },
    {
      content: "Cozy Sunday evening: curled up with a blanket, a good book, and a cup of herbal tea. 📚☕️ What's your ideal way to unwind on a Sunday? #SundayEvening #CozyVibes"
    },
    {
      content: "Exploring the world of plant-based cooking today. 🌱 What's your favorite plant-based recipe? Share your go-to dishes! #PlantBasedCooking #HealthyEating"
    },
    {
      content: "Virtual reality escape: exploring a new VR game and getting lost in a different world. 🎮 What's your favorite virtual reality experience? #VRAdventure #GamingFun"
    },
    {
      content: "Midweek gratitude check: listing three things I'm thankful for today. What's bringing joy to your day? #GratitudeChallenge #ThankfulHeart"
    },
    {
      content: "Friday fitness challenge: trying a new workout routine to kick off the weekend on a high note. 💦 What's your favorite workout? #FitnessFriday #WorkoutMotivation"
    },
    {
      content: "Mindful morning routine: meditation, affirmations, and setting positive intentions for the day. 🌞 How do you start your mornings mindfully? #MindfulMornings #PositiveIntentions"
    },
    {
      content: "Sunday Funday DIY edition: crafting something special for the home. 🛍️ What DIY projects do you enjoy? #DIYCrafts #SundayFunday"
    },
    {
      content: "Reflecting on the beauty of diversity and embracing different cultures. 🌍 Share your favorite cultural experiences or traditions! #CulturalDiversity #EmbraceCulture"
    },
    {
      content: "Saturday tech exploration: testing out new apps and gadgets. 📱 What's the latest tech discovery that you can't live without? #TechExploration #GadgetLove"
    }
  ]

  module.exports = CONTENT;
