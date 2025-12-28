import { useEffect } from 'react';

export type RobotsDirective = 'index' | 'noindex' | 'follow' | 'nofollow';

export interface MetaRobotsOptions {
  index?: boolean;
  follow?: boolean;
}

export function getRobotsContent(options: MetaRobotsOptions): string {
  const index = options.index !== false ? 'index' : 'noindex';
  const follow = options.follow !== false ? 'follow' : 'nofollow';
  return `${index},${follow}`;
}

export function useMetaRobots(options: MetaRobotsOptions) {
  useEffect(() => {
    const content = getRobotsContent(options);

    let metaTag = document.querySelector('meta[name="robots"]');

    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute('name', 'robots');
      document.head.appendChild(metaTag);
    }

    metaTag.setAttribute('content', content);

    return () => {
      if (metaTag && metaTag.parentNode) {
        metaTag.parentNode.removeChild(metaTag);
      }
    };
  }, [options.index, options.follow]);
}

export function setNoIndex() {
  let metaTag = document.querySelector('meta[name="robots"]');

  if (!metaTag) {
    metaTag = document.createElement('meta');
    metaTag.setAttribute('name', 'robots');
    document.head.appendChild(metaTag);
  }

  metaTag.setAttribute('content', 'noindex,nofollow');
}

export function setIndex() {
  let metaTag = document.querySelector('meta[name="robots"]');

  if (!metaTag) {
    metaTag = document.createElement('meta');
    metaTag.setAttribute('name', 'robots');
    document.head.appendChild(metaTag);
  }

  metaTag.setAttribute('content', 'index,follow');
}

export enum HttpStatus {
  OK = 200,
  NOT_FOUND = 404,
  ERROR = 500,
  FORBIDDEN = 403,
  UNAUTHORIZED = 401,
}

export function simulateStatusCode(status: HttpStatus): void {
  if (status === HttpStatus.NOT_FOUND || status === HttpStatus.ERROR) {
    setNoIndex();
  }
}

export interface SEOState {
  title?: string;
  description?: string;
  canonical?: string;
  robots?: MetaRobotsOptions;
  statusCode?: HttpStatus;
}

export function applySEOState(state: SEOState): void {
  if (state.robots) {
    const content = getRobotsContent(state.robots);
    let metaTag = document.querySelector('meta[name="robots"]');

    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute('name', 'robots');
      document.head.appendChild(metaTag);
    }

    metaTag.setAttribute('content', content);
  }

  if (state.statusCode) {
    simulateStatusCode(state.statusCode);
  }

  if (state.title) {
    document.title = state.title;
  }
}

export const SEOHelpers = {
  getRobotsContent,
  setNoIndex,
  setIndex,
  simulateStatusCode,
  applySEOState,
};

export default SEOHelpers;
