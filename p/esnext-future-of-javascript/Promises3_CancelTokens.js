let { token, cancel } = CancelToken.source();


async cancellableFunc(cancelToken) {
  let firstResult = await somePromise();
  cancelToken.throwIfRequested();

  let secondResult = await someOtherPromise(firstResult);
  cancelToken.throwIfRequested();

  return secondResult;
}

async cancellableFunc2(cancelToken) {
  await.cancelToken = cancelToken;

  let firstResult = await somePromise();
  let secondResult = await someOtherPromise(firstResult);

  return secondResult;
}
