import { FlattenSimpleInterpolation, css } from 'styled-components';
import durations from '../abstracts/durations';

type EasingType =
  | 'bounce-in-out'
  | 'ease-in'
  | 'ease-in-out'
  | 'ease-out'
  | 'linear'
  | 'material-standard';

type DurationNamesType = keyof typeof durations;
export type DurationValuesType = typeof durations[DurationNamesType];

interface ParamsType {
  duration?: DurationValuesType,
  easing?: EasingType,
  target?: string,
}

const defaultValues = {
  duration: durations.NORMAL,
  easing: 'material-standard' as EasingType,
  target: 'all',
};

const Transition = (params: ParamsType = defaultValues): FlattenSimpleInterpolation => {
  const timingFunction = params.easing || defaultValues.easing;

  const getTimingFunction = () => {
    switch (timingFunction) {
      case 'bounce-in-out': {
        return 'cubic-bezier(0.25, -0.2, 0.5, 1.2)';
      }
      case 'material-standard': {
        return 'cubic-bezier(0.4, 0, 0.2, 1);';
      }
      default: {
        return timingFunction;
      }
    }
  };

  return css`
    transition-duration: ${`${params.duration || defaultValues.duration}ms`};
    transition-property: ${params.target || defaultValues.target};
    transition-timing-function: ${getTimingFunction()};
  `;
};

export default Transition;
