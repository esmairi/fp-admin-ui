export const queryKeys = {
  apps: {
    all: () => ['apps'] as const,
    detail: (name: string) => ['apps', 'detail', name] as const,
  },
  views: {
    all: () => ['views'] as const,
    detail: (name: string) => ['views', 'detail', name] as const,
  },
  breadcrumb: {
    all: () => ['breadcrumb'] as const,
  },
  records: {
    all: () => [`records`] as const,
  },
  currentRecord: {
    detail: () => [`currentRecord`] as const,
  },
};
