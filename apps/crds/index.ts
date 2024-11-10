import { certManagerIssuers } from '../../libs/custom-resource-definitions/src/';

new certManagerIssuers.cert_manager.v1.Issuer(
  'test-cert',
  {
    apiVersion: 'cert-manager.io/v1',
    kind: 'Issuer',
    metadata: {
      name: 'test-issuer',
      namespace: 'test-ns',
    },
    spec: {
      selfSigned: {}
    },
  },
);
