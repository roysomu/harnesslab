# harnesslab
One test application for Harness lab work

## Delegate token

Do not put the Harness delegate token in `harness-delegate.yml`. Kubernetes Secret
`data` values are Base64 encoded, not encrypted.

After rotating an exposed token in Harness, provide the replacement through an
environment variable and create the two referenced Secrets:

```sh
export DELEGATE_TOKEN='replace-with-a-new-token'
kubectl create namespace harness-delegate-ng --dry-run=client -o yaml | kubectl apply -f -
kubectl create secret generic kubernetes-delegate-account-token \
	--namespace harness-delegate-ng \
	--from-literal=DELEGATE_TOKEN="$DELEGATE_TOKEN" \
	--dry-run=client -o yaml | kubectl apply -f -
kubectl create secret generic kubernetes-delegate-upgrader-token \
	--namespace harness-delegate-ng \
	--from-literal=UPGRADER_TOKEN="$DELEGATE_TOKEN" \
	--dry-run=client -o yaml | kubectl apply -f -
kubectl apply -f harness-delegate.yml
```

The token is passed directly to `kubectl` and is not written to a repository
file. Rotate the token immediately if the old value has been committed or
shared.
