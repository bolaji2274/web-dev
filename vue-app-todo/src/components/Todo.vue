<template>
    <div>
        <header>
        <h1>Todo-List App</h1>
        <form action="" id="new-task-form">
            <input type="text" id="new-task-input"> 
            <input type="sudmit" id="new-task-submit" value="Add-task">
        </form>
    </header>

    <main>
        <section class="task-list">
            <h2>Tasks</h2>
            <div id="tasks">
                <div class="content">
                    <input class="text" type="text" value="my shin task">
                </div>
                <div class="actions">
                    <button class="edit">EDIT</button>
                    <button class="delete">DELETE</button>
                </div>
            </div>
        </section>
    </main>
    </div>
</template>
<script>
export default {
    
}
</script>

<style scoped>
 :root{
    --dark: #374151;
    --darker: #1F2937;
    --darkest: #111827;
    --gray: #687280;
    --light: #eee;
    --pink: #ec4899;
    --purple: #885c
 }
</style>