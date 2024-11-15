export default function getDefaultTransitionProps(
  transitionProperty?: string,
  duration: number = 150
) {
  return {
    transitionProperty: `background-color, color, border-color${transitionProperty ? ', ' + transitionProperty : ''}`,
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: 'ease',
  };
}
