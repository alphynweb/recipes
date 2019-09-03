export const mockTransitionGroup = () => {
    return {
        CSSTransition: jest.fn(() => null)
    };
};