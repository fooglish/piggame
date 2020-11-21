# piggame
DOM-based pig game
# EN
GAME RULES:

Each turn, a player repeatedly rolls a dice until either a 1 is rolled or the player decides to "hold":

- If the player rolls a 1, they score nothing and it becomes the next player's turn
- If the player rolls any other number, it is added to their turn total and the player's turn continues
- If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn
- The first player to score 100 or more points wins. You can also change the amount of scores required to win (should not be lesser than 21)

# RU
Правила игры:

- Игра для двух игроков, каждый ходит в отведенный ему раунд
- За свой ход игрок может бросить кости столько раз, сколько пожелает. Каждый последующий бросок повышает ТЕКУЩЕЕ количество очков игрока в зависимости от выпавшего числа, суммируясь с предыдущими
- ОДНАКО, если игроку выпадает единица, его ТЕКУЩИЙ множитель очков обнуляется, и управление переходит к следующему игроку
- Игрок может нажать на кнопку "HOLD" и сохранить ТЕКУЩИЕ очки, добавив их к своему ОБЩЕМУ множителю очков и обнулив текущий множитель. Затем управление переходит к следующему игроку
- Побеждает игрок первым набравший 100 очков в ОБЩЕМ множителе. Можно также изменить количество очков, необходимое для победы, однако данное значение должно быть больше 20
