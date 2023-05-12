def start():
    menu = int(input(f"""\
Welcome to the menu of infinite tables

        1.Unique
        2.Infinite

Choose an option to start: """))

    if menu == 1:
        number = int(input(f'\nEnter a positive number: '))
        if number > 1:
            n = 1
            print(f'\nTABLE OF {number}')
            for n in range(1, 11):
                print(f'{number} x {n} = {n*number}')
        if number < 1:
            print(f'\n')
            while number < 1:
                number = int(input('Try again, enter just a POSITIVE number: '))
                if number > 1:
                    print(f'\nTABLE OF {number}')
                    n = 1
                    for n in range(1, 11):
                        print(f'{number} x {n} = {n*number}')
    if menu == 2:
        Cicle = True
        while Cicle == True:
            number = int(input(f"""\n
Welcome to infinite tables 
To exit enter > 0
Enter a positive number: """))
            if number > 1:
                print(f'\nTABLE OF {number}')
                n = 1 
                for n in range(1, 11):
                    print(f'{number} x {n} = {n*number}')
            if number == 0:
                print('\nThanks for using')
                Cicle = False 
                 
if __name__ == '__main__':
    start()