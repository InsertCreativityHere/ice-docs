// Copyright (c) ZeroC, Inc.

import { ReactNode } from 'react';

export const Prerequisites = ({
  children,
  title = 'Before you begin'
}: {
  children: ReactNode;
  title?: string;
}) => (
  <section
    aria-label={title}
    className="border-hairline bg-surface-subtle my-6 rounded-md border p-4"
  >
    <div className="text-ink-muted mb-2 text-[11px] font-semibold tracking-[0.07em] uppercase">
      {title}
    </div>
    <div className="text-sm leading-6 *:my-1">{children}</div>
  </section>
);
