window.SIDEBAR_ITEMS = {"constant":[["VERSION","Version number of this crate."]],"enum":[["InstantiationError","An error while instantiating a module."],["LinkError","The WebAssembly.LinkError object indicates an error during module instantiation (besides traps from the start function)."]],"fn":[["from_binaryreadererror_wasmerror",""],["get_libcall_trampoline","Returns the address of a trampoline in the libcall trampolines section."],["libcall_trampoline_len","Returns the length of a libcall trampoline."],["link_module","Links a module, patching the allocated functions with the required relocations and jump tables."],["make_libcall_trampolines","Creates a custom section containing the libcall trampolines."],["register_frame_info","Registers a new compiled module’s frame information."],["resolve_imports","This function allows to match all imports of a `ModuleInfo` with concrete definitions provided by a `Resolver`."],["translate_module","Translate a sequence of bytes forming a valid Wasm binary into a parsed ModuleInfo `ModuleTranslationState`."],["wptype_to_type","Helper function translating wasmparser types to Wasm Type."]],"macro":[["wasm_unsupported","Return an `Err(WasmError::Unsupported(msg))` where `msg` the string built by calling `format!` on the arguments to this macro."]],"mod":[["artifact_builders","Generic Artifact abstraction for Wasmer Engines."],["compiler","This module mainly outputs the `Compiler` trait that custom compilers will need to implement."],["engine","The Wasmer Engine."],["lib",""],["traits","Generic Artifact abstraction for Wasmer Engines."],["translator","This module defines the parser and translator from wasmparser to a common structure `ModuleInfo`."]],"struct":[["Artifact","A compiled wasm module, ready to be instantiated."],["ArtifactBuild","A compiled wasm module, ready to be instantiated."],["CodeMemory","Memory manager for executable code."],["Engine","A WebAssembly `Universal` Engine."],["EngineBuilder","The Builder contents of `Engine`"],["EngineInner","The inner contents of `Engine`"],["FRAME_INFO","This is a global cache of backtrace frame information for all active"],["Features","Controls which experimental features will be enabled. Features usually have a corresponding WebAssembly proposal."],["FrameInfo","Description of a frame in a backtrace for a `RuntimeError::trace`."],["FunctionBodyData","Contains function data: bytecode and its offset in the module."],["FunctionExtent","Represents a continuous region of executable memory starting with a function entry point."],["GlobalFrameInfoRegistration","An RAII structure used to unregister a module’s frame information when the module is destroyed."],["MiddlewareBinaryReader","A Middleware binary reader of the WebAssembly structures and types."],["MiddlewareReaderState","The state of the binary reader. Exposed to middlewares to push their outputs."],["ModuleEnvironment","The result of translating via `ModuleEnvironment`. Function bodies are not yet translated, and data initializers have not yet been copied out of the original buffer. The function bodies will be translated by a specific compiler backend."],["ModuleTranslationState","Contains information decoded from the Wasm module that must be referenced during each Wasm function’s translation."],["RuntimeError","A struct representing an aborted instruction execution, with a message indicating the cause."]],"trait":[["ArtifactCreate","An `Artifact` is the product that the `Engine` implementation produce and use."],["Compiler","An implementation of a Compiler from parsed WebAssembly module to Compiled native code."],["CompilerConfig","The compiler configuration options."],["FunctionBinaryReader","Trait for iterating over the operators of a Wasm Function"],["FunctionMiddleware","A function middleware specialized for a single function."],["ModuleMiddleware","A shared builder for function middlewares."],["ModuleMiddlewareChain","Trait for generating middleware chains from “prototype” (generator) chains."],["Tunables","An engine delegates the creation of memories, tables, and globals to a foreign implementor of this trait."],["Upcastable","Trait needed to get downcasting of `Engine`s to work."]],"type":[["Addend","Addend to add to the symbol value."],["CodeOffset","Offset in bytes from the beginning of the function."]]};