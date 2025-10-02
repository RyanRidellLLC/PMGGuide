// /lib/filters.ts
import type { SeriesQueryParams, ProjectQueryParams } from '../types/content';

/**
 * Builds and normalizes query parameters for series filtering
 * Ensures safe page/limit values and returns a consistent query object
 */
export function buildSeriesQuery(params: SeriesQueryParams): Required<SeriesQueryParams> {
  const page = Math.max(1, params.page ?? 1);
  const limit = Math.min(48, Math.max(6, params.limit ?? 12));
  
  return {
    q: params.q ?? '',
    color_family: params.color_family ?? undefined as never,
    finish: params.finish ?? undefined as never,
    availability: params.availability ?? undefined as never,
    page,
    limit,
  };
}

/**
 * Builds and normalizes query parameters for project filtering
 * Ensures safe page/limit values and returns a consistent query object
 */
export function buildProjectQuery(params: ProjectQueryParams): Required<ProjectQueryParams> {
  const page = Math.max(1, params.page ?? 1);
  const limit = Math.min(48, Math.max(6, params.limit ?? 12));
  
  return {
    q: params.q ?? '',
    industry: params.industry ?? undefined as never,
    year: params.year ?? undefined as never,
    stone: params.stone ?? '',
    page,
    limit,
  };
}
