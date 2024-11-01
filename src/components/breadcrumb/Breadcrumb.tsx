import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { Breadcrumb as BootstrapBreadcrumb } from 'react-bootstrap';
const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const canNotMoveBreadcrumbs = location.pathname
    .split('/')
    .filter(Boolean)
    .map((path, idx, arr) => ({
      path: `/${arr.slice(0, idx + 1).join('/')}`,
      title: t(path),
    }));

  const canMoveBreadcrumbs = location.pathname
    .split('/')
    .filter(Boolean)
    .map((path, idx, arr) => ({
      path: `/${arr.slice(0, idx - 1).join('/')}`,
      title: t(path),
    }));

  const goPage = (to: string) => {
    navigate(to);
  };

  return (
    <BootstrapBreadcrumb className="breadCrumb">
      {canNotMoveBreadcrumbs.map((bcs, idx) => (
        <BootstrapBreadcrumb.Item
          key={idx}
          onClick={() => goPage(bcs.path)}
          style={{ cursor: 'pointer' }}
        >
          {bcs.title}
        </BootstrapBreadcrumb.Item>
      ))}
      {canMoveBreadcrumbs.map((bcs, idx) => (
        <BootstrapBreadcrumb.Item
          key={idx}
          onClick={() => goPage(bcs.title)}
          style={{ cursor: 'pointer' }}
        >
          {bcs.title}
        </BootstrapBreadcrumb.Item>
      ))}
    </BootstrapBreadcrumb>
  );
};

export default Breadcrumb;
