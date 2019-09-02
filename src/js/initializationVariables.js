export const BOARD_HEIGHT = 20;//20;
export const BOARD_LENGTH = 10;//10;
export const BOARD_STATE = [...Array(BOARD_HEIGHT).fill(
                              [...Array(BOARD_LENGTH).fill(
                                [0,'clear']
                              )]
                            )];
