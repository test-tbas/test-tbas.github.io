import React from 'react';
import classNames from 'classnames';
import { InView } from 'react-intersection-observer';
import './SingleReactTimeline.css';

export const VerticalTimeline = ({
    animate = true,
    className = '',
    layout = '1-column',
    lineColor = '#FFF',
    children,
  }) => {
    if (typeof window === 'object') {
      document.documentElement.style.setProperty('--line-color', lineColor);
    }
    return (
      <div
        className={classNames(className, 'single-vertical-timeline', {
          'single-vertical-timeline--animate': animate,
          'single-vertical-timeline--one-column-left':
            layout === '1-column',
            'single-vertical-timeline-lightblue': lineColor === 'lightblue',
            'single-vertical-timeline-yellow': lineColor === 'yellow',
            'single-vertical-timeline-blue': lineColor === 'blue'
        })}
      >
        {children}
      </div>
    );
};


export const VerticalTimelineElement = ({
  children = '',
  className = '',
  contentArrowStyle = null,
  contentStyle = null,
  date = '',
  dateClassName = '',
  icon = null,
  iconClassName = '',
  iconOnClick = null,
  onTimelineElementClick = null,
  iconStyle = null,
  id = '',
  position = '',
  style = null,
  textClassName = '',
  intersectionObserverProps = {
    rootMargin: '0px 0px -40px 0px',
    triggerOnce: true,
  },
  visible = false,
  shadowSize = 'small', // small | medium | large
}) => (
    <InView {...intersectionObserverProps}>
    {({ inView, ref }) => (
      <div
        ref={ref}
        id={id}
        className={classNames(className, 'single-vertical-timeline-element', {
          'single-vertical-timeline-element--left': position === 'left',
          'single-vertical-timeline-element--no-children': children === ''
        })}
        style={style}
      >
        <React.Fragment>
          <span // eslint-disable-line jsx-a11y/no-static-element-interactions
            style={iconStyle}
            onClick={iconOnClick}
            className={classNames(
              iconClassName,
              'single-vertical-timeline-element-icon',
              `shadow-size-${shadowSize}`, // for shadow size
              {
                'bounce-in': inView || visible,
                'is-hidden': !(inView || visible),
              }
            )}
          >
            {icon}
          </span>
          <div
            style={contentStyle}
            onClick={onTimelineElementClick}
            className={classNames(
              textClassName,
              'single-vertical-timeline-element-content',
              {
                'bounce-in': inView || visible,
                'is-hidden': !(inView || visible),
              }
            )}
            >
            <div
              style={contentArrowStyle}
              className="single-vertical-timeline-element-content-arrow"
            />
            {children}
            <span
              className={classNames(
                dateClassName,
                'single-vertical-timeline-element-date'
              )}
            >
              {date}
            </span>
          </div>
        </React.Fragment>
      </div>
    )}
  </InView>
);