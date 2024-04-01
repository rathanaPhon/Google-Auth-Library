app, err := firebase.NewApp(context.Background(), nil)
if err != nil {
        log.Fatalf("error initializing app: %v\n", err)
}
