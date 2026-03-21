/**
 * Utility functions for string manipulation and formatting
 */

/**
 * Capitalize first letter of a string
 */
export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Format date to readable string
 */
export const formatDate = (date: Date, format: 'short' | 'long' = 'short'): string => {
  const options: Intl.DateTimeFormatOptions =
    format === 'short' ? { year: 'numeric', month: 'short' } : { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('en-US', options);
};

/**
 * Get years of experience from a start date
 */
export const getYearsOfExperience = (startDate: Date, endDate?: Date): number => {
  const end = endDate || new Date();
  const start = new Date(startDate);
  return Math.floor((end.getTime() - start.getTime()) / (365.25 * 24 * 60 * 60 * 1000));
};

/**
 * Slugify a string for URL usage
 */
export const slugify = (str: string): string => {
  return str
    .toLowerCase()
    .replace(/[\s]+/g, '-')
    .replace(/[^\w-]+/g, '');
};

/**
 * Scroll to element by ID with smooth behavior
 */
export const scrollToSection = (sectionId: string): void => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
