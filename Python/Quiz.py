print("Welcome to the quiz!")

suggestion = input("Do you want to play the quiz? (yes/no): ").lower()
count = 0
wrong = 0

if suggestion == "yes":
    print ("lets start...\n I will ask 5 questions and you need to score atleast 4 out of 5")
    question1 = input("What is the capital of France? ").lower()

    if question1 == "paris":
        print("Correct!")
        count += 1
    else:
        print("Incorrect. The correct answer is Paris.")
        wrong += 1

    question2 = input("What is the largest planet in our solar system? ").lower()

    if question2 == "jupiter":
        print("Correct!")
        count += 1

    else:
        print("Incorrect. The correct answer is Jupiter.")
        wrong += 1

    question3 = input("What is the chemical symbol for gold? ").lower()

    if question3 == "au":
        print("Correct!")
        count += 1
    else:
        print("Incorrect. The correct answer is Au.")
        wrong += 1

    question4 = input("What is the largest mammal in the world? ").lower()

    if question4 == "blue whale":
        print("Correct!")
        count += 1
    else:
        print("Incorrect. The correct answer is Blue Whale.")
        wrong += 1

    question5 = input("What is the capital of Japan? ").lower()

    if question5 == "tokyo":
        print("Correct!")
        count += 1
    else:
        print("Incorrect. The correct answer is Tokyo.")
        wrong += 1

    print(f"\nYou scored {count} out of 5.")
    if count >= 4:
        print("Congratulations! You passed the quiz.")
    else:
        print("Sorry, you failed the quiz.")

